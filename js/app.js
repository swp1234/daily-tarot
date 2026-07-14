/* Daily Tarot App - Main Application Logic */

class DailyTarotApp {
    constructor() {
        this.currentCards = [];
        this.selectedCategory = null;
        this.dailyReadingUsed = false;
        this.adWatchedForDeepReading = false;
        this.lastReadingDate = null;
        this.shareData = null;
        this._engagementFired = false;
        this.resultAdLoaded = false;
        this.activeEntryMode = 'manual';
        this.activeAutoDraw = false;
        this.entryParams = new URLSearchParams(window.location.search || '');
        this.entrySurface = this.entryParams.get('surface') || this.entryParams.get('utm_content') || 'direct';
    }

    track(eventName, params = {}) {
        if (typeof gtag === 'function') {
            gtag('event', eventName, {
                event_category: 'daily_tarot',
                entry_surface: this.entrySurface,
                ...params
            });
        }
    }

    /**
     * Fire GA4 engagement event on first interaction to reduce bounce rate
     */
    _fireEngagement() {
        if (this._engagementFired) return;
        this._engagementFired = true;
        this.track('engagement', { event_label: 'first_interaction' });
    }

    isParamEnabled(name) {
        const value = (this.entryParams.get(name) || '').toLowerCase();
        return ['1', 'true', 'yes', 'on', 'auto'].includes(value);
    }

    currentLanguage() {
        if (typeof i18n !== 'undefined' && typeof i18n.getCurrentLanguage === 'function') {
            return i18n.getCurrentLanguage();
        }
        return 'en';
    }

    localized(map, fallback = '') {
        if (!map || typeof map !== 'object') return fallback;
        const lang = this.currentLanguage();
        return map[lang] || map.en || map.ko || map.zh ||
            Object.values(map).find(value => typeof value === 'string' && value.trim()) ||
            fallback;
    }

    cardMeaning(card, direction = 'upright') {
        return this.localized(card?.meanings?.[direction], this.localized(card?.meanings?.upright, ''));
    }

    maybeAutoStart() {
        if (!this.isParamEnabled('start')) return;

        const autoDraw = this.isParamEnabled('autoDraw') || this.isParamEnabled('draw');
        this.track('daily_tarot_auto_start', {
            event_label: autoDraw ? 'auto_draw_requested' : 'start_requested',
            auto_draw: autoDraw ? 'true' : 'false'
        });

        window.setTimeout(() => {
            this.startReading({
                trigger: 'auto_start',
                autoDraw,
                silentIfUsed: true
            });
        }, 350);
    }

    async init() {
        // Initialize i18n
        try {
            await i18n.init();
        } catch (e) {
            console.warn('i18n init failed:', e);
        }

        // Restore theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            const btn = document.getElementById('theme-toggle');
            if (btn) btn.textContent = savedTheme === 'light' ? '🌙' : '☀️';
        }

        // Load app state
        this.loadState();

        // Setup event listeners
        this.setupEventListeners();

        // Hide loader
        const loader = document.getElementById('app-loader');
        if (loader) loader.classList.add('hidden');

        // Register service worker
        if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
            navigator.serviceWorker.register('sw.js').catch(err =>
                console.log('SW registration failed:', err)
            );
        }

        this.maybeAutoStart();
    }

    loadState() {
        const saved = localStorage.getItem('tarotAppState');
        if (saved) {
            const state = JSON.parse(saved);
            this.dailyReadingUsed = state.dailyReadingUsed || false;
            this.lastReadingDate = state.lastReadingDate || null;

            // Check if reading is for today
            const today = new Date().toDateString();
            if (this.lastReadingDate !== today) {
                this.dailyReadingUsed = false;
                this.lastReadingDate = today;
                this.saveState();
            }
        } else {
            this.lastReadingDate = new Date().toDateString();
            this.saveState();
        }
    }

    saveState() {
        const state = {
            dailyReadingUsed: this.dailyReadingUsed,
            lastReadingDate: this.lastReadingDate
        };
        localStorage.setItem('tarotAppState', JSON.stringify(state));
    }

    setupEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this._fireEngagement();
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());

        // Language toggle
        document.getElementById('lang-toggle').addEventListener('click', () => this.toggleLanguageMenu());
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', (e) => this.changeLanguage(e.target.dataset.lang));
        });

        // Reading tab
        document.getElementById('start-reading-btn').addEventListener('click', () => this.startReading({ trigger: 'manual' }));
        document.getElementById('share-reading').addEventListener('click', () => this.shareReading());
        document.getElementById('deep-reading-btn').addEventListener('click', () => this.showDeepReading());
        document.getElementById('new-reading-btn').addEventListener('click', () => this.resetReading());

        // Category tab
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => this.selectCategory(e.currentTarget.dataset.category));
        });
        document.getElementById('share-category').addEventListener('click', () => this.shareCategory());
        document.getElementById('new-category-btn').addEventListener('click', () => this.resetCategory());

        // Gallery tab
        this.populateGallery();
        document.getElementById('close-detail').addEventListener('click', () => this.closeCardDetail());

        // Interstitial ad close
        document.getElementById('close-ad').addEventListener('click', () => this.closeInterstitialAd());

        // Social share buttons
        document.getElementById('shareTwitterBtn')?.addEventListener('click', () => {
            const text = document.title + ' - ' + window.location.href;
            window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text), '_blank');
            if (typeof gtag !== 'undefined') gtag('event', 'share', { method: 'twitter' });
        });

        document.getElementById('shareUrlBtn')?.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                const btn = document.getElementById('shareUrlBtn');
                btn.textContent = i18n.t('share.copied') || '✅ Copied!';
                setTimeout(() => { btn.innerHTML = i18n.t('share.copyUrl') || '📋 Copy URL'; }, 2000);
            });
            if (typeof gtag !== 'undefined') gtag('event', 'share', { method: 'url_copy' });
        });
    }

    switchTab(tabName) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected tab
        document.getElementById(tabName + '-tab').classList.add('active');
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    }

    toggleTheme() {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') !== 'light';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');

        // Update emoji
        const btn = document.getElementById('theme-toggle');
        btn.textContent = isDark ? '🌙' : '☀️';
    }

    toggleLanguageMenu() {
        const menu = document.getElementById('lang-menu');
        menu.classList.toggle('hidden');
    }

    async changeLanguage(lang) {
        await i18n.setLanguage(lang);
        this.toggleLanguageMenu();

        // Update active indicator
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });
    }

    startReading(options = {}) {
        this._fireEngagement();
        // Check daily limit
        if (this.dailyReadingUsed) {
            if (options.silentIfUsed) {
                this.track('daily_tarot_auto_start_blocked', {
                    event_label: 'daily_limit'
                });
                return false;
            }
            alert(i18n.t('reading.limitReached', 'You have used your daily free reading. Watch an ad for another reading?'));
            // Could implement ad watching here
            return false;
        }

        this.dailyReadingUsed = true;
        this.saveState();
        this.resultAdLoaded = false;
        this.activeEntryMode = options.trigger || 'manual';
        this.activeAutoDraw = Boolean(options.autoDraw);
        this.track('tarot_start', {
            event_label: this.activeEntryMode,
            auto_draw: this.activeAutoDraw ? 'true' : 'false'
        });

        // Hide intro, show card drawing area
        document.querySelector('.reading-intro').classList.add('hidden');
        document.getElementById('card-area').classList.remove('hidden');
        document.getElementById('reading-result').classList.add('hidden');

        // Clear previous cards
        this.currentCards = new Array(3).fill(null);

        // Setup card back clicking
        document.querySelectorAll('.card-back').forEach((cardBack, index) => {
            cardBack.classList.remove('flipped');
            cardBack.style.pointerEvents = 'auto';
            cardBack.onclick = () => this.drawCard(index, cardBack);
        });

        if (this.activeAutoDraw) {
            this.queueAutoDraw();
        }

        return true;
    }

    queueAutoDraw() {
        const cardBacks = Array.from(document.querySelectorAll('.card-back'));
        this.track('daily_tarot_auto_draw', {
            event_label: 'queued',
            card_count: cardBacks.length
        });
        cardBacks.forEach((cardBack, index) => {
            window.setTimeout(() => {
                if (!this.currentCards[index]) {
                    this.drawCard(index, cardBack);
                }
            }, 500 + (index * 450));
        });
    }

    async drawCard(position, cardBackEl) {
        if (this.currentCards[position]) return;

        // Disable clicking after card is drawn
        cardBackEl.style.pointerEvents = 'none';

        // Flip animation
        cardBackEl.classList.add('flipped');

        // Get random card
        const card = getRandomTarotCard();
        const isReversed = Math.random() > 0.5;

        // Store card
        this.currentCards[position] = {
            position,
            card,
            reversed: isReversed
        };
        this.track('tarot_card_draw', {
            event_label: `card_${position + 1}`,
            direction: isReversed ? 'reversed' : 'upright',
            entry_mode: this.activeEntryMode
        });

        // Display card on front
        setTimeout(() => {
            const cardDisplay = cardBackEl.nextElementSibling?.previousElementSibling ||
                cardBackEl.parentElement.querySelector('.card-display');
            if (cardDisplay) {
                cardDisplay.textContent = card.emoji;
            }
        }, 300);

        // When all 3 cards drawn, show results
        if (this.currentCards.filter(Boolean).length === 3) {
            setTimeout(() => this.displayReadingResult(), 500);
        }
    }

    displayReadingResult() {
        document.getElementById('card-area').classList.add('hidden');
        document.getElementById('reading-result').classList.remove('hidden');

        // Display each card's interpretation
        let summaryMessages = [];
        const drawnCards = this.currentCards.filter(Boolean);
        drawnCards.forEach((cardData, index) => {
            const card = cardData.card;
            const direction = cardData.reversed ? 'reversed' : 'upright';
            const meaning = this.cardMeaning(card, direction);
            const cardName = this.localized(card.name, 'Tarot Card');

            document.getElementById(`result-name-${index}`).textContent = cardName;
            document.getElementById(`result-card-${index}`).textContent = card.emoji;
            document.getElementById(`result-meaning-${index}`).textContent = meaning;
            document.getElementById(`result-direction-${index}`).textContent =
                cardData.reversed ? (i18n.t('reading.reversed') || '(Reversed)') : (i18n.t('reading.upright') || '(Upright)');

            summaryMessages.push(`${cardName}: ${meaning}`);
        });

        // Generate summary message
        const summaryText = this.generateSummaryMessage(summaryMessages);
        document.getElementById('reading-summary').textContent = summaryText;

        // Store for sharing
        this.shareData = {
            type: 'reading',
            cards: drawnCards,
            summary: summaryText
        };

        // Show social share buttons
        this.showShareButtons();
        this.loadResultAd();
        this.track('result_view', {
            event_label: this.activeEntryMode,
            auto_draw: this.activeAutoDraw ? 'true' : 'false',
            card_count: drawnCards.length
        });
        this.track('daily_tarot_result_view', {
            event_label: this.activeEntryMode,
            auto_draw: this.activeAutoDraw ? 'true' : 'false',
            card_count: drawnCards.length
        });
    }

    loadResultAd() {
        if (this.resultAdLoaded) return;

        const adSlot = document.querySelector('[data-ad-surface="daily_tarot_result_ad"]');
        const adNode = adSlot?.querySelector('.adsbygoogle');
        if (!adSlot || !adNode) return;

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            this.resultAdLoaded = true;
            adSlot.dataset.loaded = 'true';
            this.track('daily_tarot_result_ad_impression', {
                event_label: this.activeEntryMode,
                ad_slot: adNode.getAttribute('data-ad-slot') || 'auto'
            });
        } catch (error) {
            console.warn('Daily Tarot result ad failed to load:', error);
        }
    }

    showShareButtons() {
        const shareSection = document.getElementById('share-section');
        if (shareSection) shareSection.style.display = 'flex';
    }

    generateSummaryMessage(meanings) {
        const template = i18n.t('reading.summaryTemplate',
            'Past: {past}\n\nPresent: {present}\n\nFuture: {future}\n\nYour day is filled with mystical messages. Reflect on the meaning of each card.'
        );

        return template
            .replace('{past}', meanings[0])
            .replace('{present}', meanings[1])
            .replace('{future}', meanings[2]);
    }

    showDeepReading() {
        const section = document.getElementById('premium-section');

        if (section.classList.contains('hidden')) {
            // Show ad first
            this.showInterstitialAd(() => {
                section.classList.remove('hidden');
                this.generateDeepReading();
            });
        } else {
            section.classList.add('hidden');
        }
    }

    generateDeepReading() {
        if (!this.currentCards || this.currentCards.length !== 3) return;

        const cards = this.currentCards.filter(Boolean).map(c => c.card);
        const lang = this.currentLanguage();

        // Generate AI-like insights
        const patterns = this.generatePatterns(cards, lang);
        const guidance = this.generateGuidance(cards, lang);
        const advice = this.generateAdvice(cards, lang);

        document.getElementById('ai-patterns').textContent = patterns;
        document.getElementById('ai-guidance').textContent = guidance;

        const adviceList = document.getElementById('ai-advice');
        adviceList.innerHTML = '';
        advice.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            adviceList.appendChild(li);
        });
    }

    generatePatterns(cards, lang) {
        return i18n.t('deepReading.patterns',
            'Analyzing the deep connections between the three cards, your current situation is in a process of change and growth. Your present decision is determining the direction of your future based on your past foundation.'
        );
    }

    generateGuidance(cards, lang) {
        return i18n.t('deepReading.guidance',
            'Wise Guidance: Small actions in the present create big changes in the future. Trust your intuition without fear, embrace change, and live each moment consciously.'
        );
    }

    generateAdvice(cards, lang) {
        const defaultAdvice = [
            'Meditate for 5 minutes every morning and listen to your inner voice',
            'Face your fears but take one step at a time',
            'Share your thoughts with trustworthy people and seek their advice'
        ];
        return i18n.t('deepReading.advice', defaultAdvice);
    }

    shareReading() {
        if (!this.shareData) return;

        const title = i18n.t('reading.yourReading', 'My Tarot Reading');
        const text = this.shareData.summary.replace(/\n/g, ' ');
        const url = window.location.href;

        if (navigator.share) {
            navigator.share({ title, text, url }).catch(err =>
                console.log('Share failed:', err)
            );
        } else {
            // Fallback
            const shareText = `${title}\n${text}\n${url}`;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(shareText);
                alert(i18n.t('reading.copiedToClipboard', 'Copied to clipboard!'));
            }
        }
    }

    resetReading() {
        this.currentCards = [];
        this.resultAdLoaded = false;
        this.activeEntryMode = 'manual';
        this.activeAutoDraw = false;
        this.shareData = null;
        document.getElementById('card-area').classList.add('hidden');
        document.getElementById('reading-result').classList.add('hidden');
        document.getElementById('premium-section').classList.add('hidden');
        document.querySelector('.reading-intro').classList.remove('hidden');
        const shareSection = document.getElementById('share-section');
        if (shareSection) shareSection.style.display = 'none';
    }

    selectCategory(category) {
        this._fireEngagement();
        this.selectedCategory = category;
        const cards = getRandomTarotCards(3);

        // Get category info - Use i18n for category names
        const categoryInfo = {
            love: { icon: '💕' },
            money: { icon: '💰' },
            health: { icon: '💪' },
            personal: { icon: '🌟' }
        };

        const info = categoryInfo[category];
        const lang = this.currentLanguage();
        const categoryKey = `category.${category}`;
        const categoryTitle = i18n.t(categoryKey, 'Category Reading');

        document.querySelector('.category-selector').classList.add('hidden');
        document.getElementById('category-result').classList.remove('hidden');
        document.getElementById('category-icon').textContent = info.icon;
        document.getElementById('category-title').textContent = categoryTitle;

        // Display cards
        cards.forEach((card, index) => {
            const el = document.getElementById(`cat-card-${index}`);
            el.innerHTML = `<div style="font-size: 2.5rem; text-align: center; margin-bottom: 0.5rem;">${card.emoji}</div><strong>${this.localized(card.name, 'Tarot Card')}</strong><p>${this.cardMeaning(card, 'upright')}</p>`;
        });

        // Generate interpretation
        const interpretation = this.generateCategoryInterpretation(category, cards, lang);
        document.getElementById('category-interpretation').textContent = interpretation;

        this.shareData = {
            type: 'category',
            category,
            cards,
            interpretation
        };
    }

    generateCategoryInterpretation(category, cards, lang) {
        // Get category name from i18n
        const categoryKey = `category.category${category.charAt(0).toUpperCase() + category.slice(1)}`;
        const categoryName = i18n.t(categoryKey,
            category === 'love' ? 'Love' :
            category === 'money' ? 'Money' :
            category === 'health' ? 'Health' : 'Personal'
        );

        const meanings = cards.map(c => this.cardMeaning(c, 'upright')).join(', ');
        const guidanceLabel = i18n.t('reading.summary', 'Guidance');
        return `${categoryName} ${guidanceLabel}: ${meanings}`;
    }

    shareCategory() {
        if (!this.shareData) return;
        const text = `${this.shareData.interpretation}\n\n${window.location.href}`;

        if (navigator.share) {
            navigator.share({ title: 'Tarot Reading', text }).catch(err =>
                console.log('Share failed:', err)
            );
        } else {
            navigator.clipboard?.writeText(text);
            alert(i18n.t('reading.copiedToClipboard', 'Copied to clipboard!'));
        }
    }

    resetCategory() {
        document.querySelector('.category-selector').classList.remove('hidden');
        document.getElementById('category-result').classList.add('hidden');
        this.selectedCategory = null;
    }

    populateGallery() {
        const gallery = document.getElementById('gallery-grid');
        gallery.innerHTML = '';

        TAROT_CARDS.forEach(card => {
            const cardEl = document.createElement('div');
            cardEl.className = 'gallery-card';
            cardEl.textContent = card.emoji;
            cardEl.addEventListener('click', () => this.showCardDetail(card));
            gallery.appendChild(cardEl);
        });
    }

    showCardDetail(card) {
        const lang = this.currentLanguage();
        document.getElementById('card-detail').classList.remove('hidden');
        document.getElementById('detail-card-display').textContent = card.emoji;
        document.getElementById('detail-card-name').textContent = this.localized(card.name, 'Tarot Card');
        document.getElementById('detail-meaning-upright').textContent = this.cardMeaning(card, 'upright');
        document.getElementById('detail-meaning-reversed').textContent = this.cardMeaning(card, 'reversed');
    }

    closeCardDetail() {
        document.getElementById('card-detail').classList.add('hidden');
    }

    showInterstitialAd(callback) {
        document.getElementById('interstitial-ad').classList.remove('hidden');
        let countdown = 5;

        const interval = setInterval(() => {
            document.getElementById('countdown').textContent = countdown;
            countdown--;

            if (countdown < 0) {
                clearInterval(interval);
                this.closeInterstitialAd();
                if (callback) callback();
            }
        }, 1000);
    }

    closeInterstitialAd() {
        document.getElementById('interstitial-ad').classList.add('hidden');
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const app = new DailyTarotApp();
        app.init().catch(error => {
            console.error('Failed to initialize app:', error);
        });
    });
} else {
    const app = new DailyTarotApp();
    app.init().catch(error => {
        console.error('Failed to initialize app:', error);
    });
}
