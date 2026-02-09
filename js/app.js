/* Daily Tarot App - Main Application Logic */

class DailyTarotApp {
    constructor() {
        this.currentCards = [];
        this.selectedCategory = null;
        this.dailyReadingUsed = false;
        this.adWatchedForDeepReading = false;
        this.lastReadingDate = null;
        this.shareData = null;
    }

    async init() {
        // Initialize i18n
        await i18n.init();

        // Load app state
        this.loadState();

        // Setup event listeners
        this.setupEventListeners();

        // Hide loader
        document.getElementById('app-loader').classList.add('hidden');

        // Register service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').catch(err =>
                console.log('SW registration failed:', err)
            );
        }
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
            btn.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });

        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());

        // Language toggle
        document.getElementById('lang-toggle').addEventListener('click', () => this.toggleLanguageMenu());
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', (e) => this.changeLanguage(e.target.dataset.lang));
        });

        // Reading tab
        document.getElementById('start-reading-btn').addEventListener('click', () => this.startReading());
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

    startReading() {
        // Check daily limit
        if (this.dailyReadingUsed) {
            alert(i18n.t('reading.limitReached', 'You have used your daily free reading. Watch an ad for another reading?'));
            // Could implement ad watching here
            return;
        }

        this.dailyReadingUsed = true;
        this.saveState();

        // Hide intro, show card drawing area
        document.querySelector('.reading-intro').classList.add('hidden');
        document.getElementById('card-area').classList.remove('hidden');
        document.getElementById('reading-result').classList.add('hidden');

        // Clear previous cards
        this.currentCards = [];

        // Setup card back clicking
        document.querySelectorAll('.card-back').forEach((cardBack, index) => {
            cardBack.addEventListener('click', () => this.drawCard(index, cardBack));
        });
    }

    async drawCard(position, cardBackEl) {
        // Disable clicking after card is drawn
        cardBackEl.style.pointerEvents = 'none';

        // Flip animation
        cardBackEl.classList.add('flipped');

        // Get random card
        const card = getRandomTarotCard();
        const isReversed = Math.random() > 0.5;

        // Store card
        this.currentCards.push({
            position,
            card,
            reversed: isReversed
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
        if (this.currentCards.length === 3) {
            setTimeout(() => this.displayReadingResult(), 500);
        }
    }

    displayReadingResult() {
        document.getElementById('card-area').classList.add('hidden');
        document.getElementById('reading-result').classList.remove('hidden');

        // Display each card's interpretation
        let summaryMessages = [];
        this.currentCards.forEach((cardData, index) => {
            const card = cardData.card;
            const meaning = cardData.reversed ?
                card.meanings.reversed[i18n.getCurrentLanguage()] :
                card.meanings.upright[i18n.getCurrentLanguage()];

            document.getElementById(`result-name-${index}`).textContent = card.name[i18n.getCurrentLanguage()];
            document.getElementById(`result-card-${index}`).textContent = card.emoji;
            document.getElementById(`result-meaning-${index}`).textContent = meaning;
            document.getElementById(`result-direction-${index}`).textContent =
                cardData.reversed ? '(Reversed)' : '(Upright)';

            summaryMessages.push(`${card.name[i18n.getCurrentLanguage()]}: ${meaning}`);
        });

        // Generate summary message
        const summaryText = this.generateSummaryMessage(summaryMessages);
        document.getElementById('reading-summary').textContent = summaryText;

        // Store for sharing
        this.shareData = {
            type: 'reading',
            cards: this.currentCards,
            summary: summaryText
        };
    }

    generateSummaryMessage(meanings) {
        const messages = {
            ko: `과거: ${meanings[0]}\n\n현재: ${meanings[1]}\n\n미래: ${meanings[2]}\n\n당신의 오늘은 신비로운 메시지로 가득합니다. 각 카드의 의미를 깊이 생각해보세요.`,
            en: `Past: ${meanings[0]}\n\nPresent: ${meanings[1]}\n\nFuture: ${meanings[2]}\n\nYour day is filled with mystical messages. Reflect on the meaning of each card.`,
            zh: `过去: ${meanings[0]}\n\n现在: ${meanings[1]}\n\n未来: ${meanings[2]}\n\n你的今天充满了神秘的信息。深入思考每张卡片的含义。`,
            ja: `過去: ${meanings[0]}\n\n現在: ${meanings[1]}\n\n未来: ${meanings[2]}\n\nあなたの今日は神秘的なメッセージに満ちています。各カードの意味を深く考えてください。`,
            hi: `अतीत: ${meanings[0]}\n\nवर्तमान: ${meanings[1]}\n\nभविष्य: ${meanings[2]}\n\nआपका आज रहस्यमय संदेशों से भरा हुआ है। प्रत्येक कार्ड के अर्थ को गहराई से सोचें।`,
            ru: `Прошлое: ${meanings[0]}\n\nНастоящее: ${meanings[1]}\n\nБудущее: ${meanings[2]}\n\nВаш день полон мистических сообщений. Глубоко размышляйте о значении каждой карты.`,
            es: `Pasado: ${meanings[0]}\n\nPresente: ${meanings[1]}\n\nFuturo: ${meanings[2]}\n\nTu día está lleno de mensajes místicos. Reflexiona sobre el significado de cada carta.`,
            pt: `Passado: ${meanings[0]}\n\nPresente: ${meanings[1]}\n\nFuturo: ${meanings[2]}\n\nSeu dia está cheio de mensagens místicas. Reflita sobre o significado de cada carta.`,
            id: `Masa lalu: ${meanings[0]}\n\nMasa kini: ${meanings[1]}\n\nMasa depan: ${meanings[2]}\n\nHari Anda penuh dengan pesan mistis. Renungkan makna setiap kartu.`,
            tr: `Geçmiş: ${meanings[0]}\n\nBugün: ${meanings[1]}\n\nGelecek: ${meanings[2]}\n\nGünün mistik mesajlarla dolu. Her kartın anlamını derin düşün.`,
            de: `Vergangenheit: ${meanings[0]}\n\nGegenwart: ${meanings[1]}\n\nZukunft: ${meanings[2]}\n\nIhr Tag ist voller mystischer Botschaften. Denken Sie tief über die Bedeutung jeder Karte nach.`,
            fr: `Passé: ${meanings[0]}\n\nPrésent: ${meanings[1]}\n\nFutur: ${meanings[2]}\n\nVotre jour est rempli de messages mystiques. Réfléchissez profondément au sens de chaque carte.`
        };

        return messages[i18n.getCurrentLanguage()] || messages.en;
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

        const cards = this.currentCards.map(c => c.card);
        const lang = i18n.getCurrentLanguage();

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
        const patterns = {
            ko: '세 카드 사이의 깊은 연결고리를 분석한 결과, 당신의 현재 상황은 변화와 성장의 과정에 있습니다. 과거의 기초 위에 현재의 결정이 미래의 방향을 결정하고 있음을 알 수 있습니다.',
            en: 'Analyzing the deep connections between the three cards, your current situation is in a process of change and growth. Your present decision is determining the direction of your future based on your past foundation.',
            zh: '分析三张卡之间的深层联系，你当前的状况处于变化和成长的过程中。你的现在决定正在决定你的未来方向，基于你的过去基础。',
            ja: '3つのカード間の深い繋がりを分析すると、あなたの現在の状況は変化と成長の過程にあります。あなたの現在の決定があなたの過去の基盤に基づいてあなたの未来の方向を決定しています。',
            hi: 'तीन कार्डों के बीच गहरे संबंध का विश्लेषण करते हुए, आपकी वर्तमान स्थिति परिवर्तन और विकास की प्रक्रिया में है। आपका वर्तमान निर्णय आपके पास की नींव के आधार पर आपके भविष्य की दिशा निर्धारित कर रहा है।',
            ru: 'Анализируя глубокие связи между тремя картами, ваша текущая ситуация находится в процессе изменения и роста. Ваше текущее решение определяет направление вашего будущего на основе вашего прошлого основания.',
            es: 'Analizando las conexiones profundas entre las tres cartas, tu situación actual está en un proceso de cambio y crecimiento. Tu decisión presente está determinando la dirección de tu futuro basado en tu fundación pasada.',
            pt: 'Analisando as conexões profundas entre as três cartas, sua situação atual está em um processo de mudança e crescimento. Sua decisão presente está determinando a direção do seu futuro com base em sua fundação passada.',
            id: 'Menganalisis koneksi mendalam antara tiga kartu, situasi Anda saat ini berada dalam proses perubahan dan pertumbuhan. Keputusan Anda saat ini menentukan arah masa depan Anda berdasarkan fondasi masa lalu Anda.',
            tr: 'Üç kart arasındaki derin bağlantıları analiz ederek, mevcut durumunuz değişim ve büyüme sürecindedir. Mevcut kararınız, geçmiş temellerinize bağlı olarak geleceğinizin yönünü belirliyor.',
            de: 'Bei der Analyse der tiefen Verbindungen zwischen den drei Karten befindet sich Ihre aktuelle Situation in einem Prozess der Veränderung und des Wachstums. Ihre aktuelle Entscheidung bestimmt die Richtung Ihrer Zukunft auf der Grundlage Ihrer bisherigen Grundlagen.',
            fr: 'En analysant les connexions profondes entre les trois cartes, votre situation actuelle est dans un processus de changement et de croissance. Votre décision présente détermine la direction de votre avenir en fonction de votre fondation passée.'
        };
        return patterns[lang] || patterns.en;
    }

    generateGuidance(cards, lang) {
        const guidance = {
            ko: '지혜로운 조언: 현재의 작은 행동이 미래의 큰 변화를 만듭니다. 두려움 없이 당신의 직관을 믿고, 변화를 수용하며, 매 순간을 의식적으로 살아가세요.',
            en: 'Wise Guidance: Small actions in the present create big changes in the future. Trust your intuition without fear, embrace change, and live each moment consciously.',
            zh: '明智的指导：当下的小行动创造未来的大变化。无惧地相信你的直觉，拥抱变化，有意识地生活。',
            ja: '賢明なガイダンス：現在の小さな行動が未来の大きな変化を生み出します。恐れずあなたの直感を信じ、変化を受け入れ、各瞬間を意識的に生きてください。',
            hi: 'बुद्धिमान मार्गदर्शन: वर्तमान के छोटे कार्य भविष्य में बड़े परिवर्तन लाते हैं। अपने अंतर्ज्ञान पर बिना डर विश्वास करें, परिवर्तन को स्वीकार करें, और हर पल को सचेतन रूप से जिएं।',
            ru: 'Мудрое руководство: небольшие действия в настоящем создают большие изменения в будущем. Доверьтесь своей интуиции без страха, примите изменения и живите каждый момент сознательно.',
            es: 'Orientación sabia: Las pequeñas acciones en el presente crean grandes cambios en el futuro. Confía en tu intuición sin miedo, acepta el cambio y vive cada momento conscientemente.',
            pt: 'Orientação sábia: Pequenas ações no presente criam grandes mudanças no futuro. Confie em sua intuição sem medo, abraçe a mudança e viva cada momento conscientemente.',
            id: 'Panduan Bijak: Tindakan kecil di masa kini menciptakan perubahan besar di masa depan. Percayai intuisi Anda tanpa takut, terima perubahan, dan hidup setiap saat dengan sadar.',
            tr: 'Bilge Rehberlik: Şimdideki küçük eylemler gelecekte büyük değişiklikler yaratır. Sezginize korkmadan güvenin, değişimi benimseyin ve her anı bilinçli bir şekilde yaşayın.',
            de: 'Weise Anleitung: Kleine Handlungen in der Gegenwart führen zu großen Veränderungen in der Zukunft. Vertrauen Sie Ihrer Intuition ohne Angst, akzeptieren Sie Veränderungen und leben Sie jeden Moment bewusst.',
            fr: 'Conseil Sage: Les petites actions dans le présent créent de grands changements dans l\'avenir. Faites confiance à votre intuition sans crainte, acceptez le changement et vivez chaque moment consciemment.'
        };
        return guidance[lang] || guidance.en;
    }

    generateAdvice(cards, lang) {
        const adviceList = {
            ko: [
                '매일 아침 5분간 명상하고 당신의 내면의 목소리에 귀 기울이세요',
                '두려움을 마주하되, 한 번에 한 발씩 나아가세요',
                '신뢰할 수 있는 사람과 당신의 생각을 나누고 조언을 구하세요'
            ],
            en: [
                'Meditate for 5 minutes every morning and listen to your inner voice',
                'Face your fears but take one step at a time',
                'Share your thoughts with trustworthy people and seek their advice'
            ],
            zh: [
                '每天早上冥想5分钟，聆听你内心的声音',
                '面对你的恐惧，但一次迈一步',
                '与值得信任的人分享你的想法，寻求他们的建议'
            ],
            ja: [
                '毎朝5分間瞑想し、内なる声に耳を傾けてください',
                'あなたの恐れに直面してください。ただし一度に一歩ずつ',
                '信頼できる人とあなたの考えを共有し、彼らのアドバイスを求めてください'
            ],
            hi: [
                'प्रतिदिन सुबह 5 मिनट ध्यान करें और अपनी आंतरिक आवाज सुनें',
                'अपने भय का सामना करें, लेकिन एक बार में एक कदम उठाएं',
                'विश्वासपात्र लोगों के साथ अपने विचार साझा करें और उनकी सलाह लें'
            ],
            ru: [
                'Медитируйте по 5 минут каждое утро и слушайте свой внутренний голос',
                'Столкнитесь со своими страхами, но делайте по одному шагу за раз',
                'Поделитесь своими мыслями с надежными людьми и просите их совета'
            ],
            es: [
                'Medita 5 minutos cada mañana y escucha tu voz interior',
                'Enfrenta tus miedos pero da un paso a la vez',
                'Comparte tus pensamientos con personas de confianza y busca sus consejos'
            ],
            pt: [
                'Medite por 5 minutos cada manhã e ouça sua voz interior',
                'Enfrente seus medos, mas dê um passo de cada vez',
                'Compartilhe seus pensamentos com pessoas confiáveis e procure seus conselhos'
            ],
            id: [
                'Bermeditasi selama 5 menit setiap pagi dan dengarkan suara batin Anda',
                'Hadapi ketakutan Anda tetapi ambil satu langkah pada satu waktu',
                'Bagikan pemikiran Anda dengan orang-orang terpercaya dan minta saran mereka'
            ],
            tr: [
                'Her sabah 5 dakika meditasyon yapın ve iç sesinizi dinleyin',
                'Korkularınızla yüzleşin ama bir seferde bir adım atın',
                'Güvenilir insanlarla düşüncelerinizi paylaşın ve tavsiye isteyin'
            ],
            de: [
                'Meditieren Sie jeden Morgen 5 Minuten lang und hören Sie auf Ihre innere Stimme',
                'Stellen Sie sich Ihren Ängsten, aber machen Sie einen Schritt nach dem anderen',
                'Teilen Sie Ihre Gedanken mit vertrauenswürdigen Menschen und bitten Sie um Rat'
            ],
            fr: [
                'Méditez 5 minutes chaque matin et écoutez votre voix intérieure',
                'Affrontez vos peurs mais allez un pas à la fois',
                'Partagez vos pensées avec des personnes de confiance et demandez leurs conseils'
            ]
        };
        return adviceList[lang] || adviceList.en;
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
        this.shareData = null;
        document.getElementById('card-area').classList.add('hidden');
        document.getElementById('reading-result').classList.add('hidden');
        document.getElementById('premium-section').classList.add('hidden');
        document.querySelector('.reading-intro').classList.remove('hidden');
    }

    selectCategory(category) {
        this.selectedCategory = category;
        const cards = getRandomTarotCards(3);

        // Get category info
        const categoryInfo = {
            love: {
                icon: '💕',
                lang: {
                    ko: '러브 운세',
                    en: 'Love & Relationships',
                    zh: '爱情运势',
                    ja: '恋愛運',
                    hi: 'प्रेम और संबंध',
                    ru: 'Любовь и отношения',
                    es: 'Amor y Relaciones',
                    pt: 'Amor e Relacionamentos',
                    id: 'Cinta dan Hubungan',
                    tr: 'Aşk ve İlişkiler',
                    de: 'Liebe und Beziehungen',
                    fr: 'Amour et Relations'
                }
            },
            money: {
                icon: '💰',
                lang: {
                    ko: '금전 운세',
                    en: 'Money & Career',
                    zh: '金钱和职业',
                    ja: 'お金とキャリア',
                    hi: 'पैसा और करियर',
                    ru: 'Деньги и карьера',
                    es: 'Dinero y Carrera',
                    pt: 'Dinheiro e Carreira',
                    id: 'Uang dan Karir',
                    tr: 'Para ve Kariyer',
                    de: 'Geld und Karriere',
                    fr: 'Argent et Carrière'
                }
            },
            health: {
                icon: '💪',
                lang: {
                    ko: '건강 운세',
                    en: 'Health & Wellness',
                    zh: '健康与保健',
                    ja: '健康とウェルネス',
                    hi: 'स्वास्थ्य और कल्याण',
                    ru: 'Здоровье и благополучие',
                    es: 'Salud y Bienestar',
                    pt: 'Saúde e Bem-estar',
                    id: 'Kesehatan dan Kesejahteraan',
                    tr: 'Sağlık ve Wellness',
                    de: 'Gesundheit und Wohlbefinden',
                    fr: 'Santé et Bien-être'
                }
            },
            personal: {
                icon: '🌟',
                lang: {
                    ko: '개인 성장',
                    en: 'Personal Growth',
                    zh: '个人成长',
                    ja: '個人成長',
                    hi: 'व्यक्तिगत विकास',
                    ru: 'Личностный рост',
                    es: 'Crecimiento Personal',
                    pt: 'Crescimento Pessoal',
                    id: 'Pertumbuhan Pribadi',
                    tr: 'Kişisel Gelişim',
                    de: 'Persönliches Wachstum',
                    fr: 'Croissance Personnelle'
                }
            }
        };

        const info = categoryInfo[category];
        const lang = i18n.getCurrentLanguage();

        document.querySelector('.category-selector').classList.add('hidden');
        document.getElementById('category-result').classList.remove('hidden');
        document.getElementById('category-icon').textContent = info.icon;
        document.getElementById('category-title').textContent = info.lang[lang] || info.lang.en;

        // Display cards
        cards.forEach((card, index) => {
            const el = document.getElementById(`cat-card-${index}`);
            el.innerHTML = `<div style="font-size: 2.5rem; text-align: center; margin-bottom: 0.5rem;">${card.emoji}</div><strong>${card.name[lang]}</strong><p>${card.meanings.upright[lang]}</p>`;
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
        const baseMsg = {
            ko: `${category === 'love' ? '연애' : category === 'money' ? '금전' : category === 'health' ? '건강' : '개인'} 운세: `,
            en: `${category === 'love' ? 'Love' : category === 'money' ? 'Money' : category === 'health' ? 'Health' : 'Personal'} Guidance: `,
            zh: `${category === 'love' ? '爱情' : category === 'money' ? '金钱' : category === 'health' ? '健康' : '个人'}运势: `,
            ja: `${category === 'love' ? '恋愛' : category === 'money' ? '金銭' : category === 'health' ? '健康' : '個人'}運勢: `,
            hi: `${category === 'love' ? 'प्रेम' : category === 'money' ? 'पैसा' : category === 'health' ? 'स्वास्थ्य' : 'व्यक्तिगत'} मार्गदर्शन: `,
            ru: `${category === 'love' ? 'Любовь' : category === 'money' ? 'Деньги' : category === 'health' ? 'Здоровье' : 'Личность'}: `,
            es: `${category === 'love' ? 'Amor' : category === 'money' ? 'Dinero' : category === 'health' ? 'Salud' : 'Personal'}: `,
            pt: `${category === 'love' ? 'Amor' : category === 'money' ? 'Dinheiro' : category === 'health' ? 'Saúde' : 'Pessoal'}: `,
            id: `${category === 'love' ? 'Cinta' : category === 'money' ? 'Uang' : category === 'health' ? 'Kesehatan' : 'Pribadi'}: `,
            tr: `${category === 'love' ? 'Aşk' : category === 'money' ? 'Para' : category === 'health' ? 'Sağlık' : 'Kişi'}: `,
            de: `${category === 'love' ? 'Liebe' : category === 'money' ? 'Geld' : category === 'health' ? 'Gesundheit' : 'Personal'}: `,
            fr: `${category === 'love' ? 'Amour' : category === 'money' ? 'Argent' : category === 'health' ? 'Santé' : 'Personne'}: `
        };

        const meanings = cards.map(c => c.meanings.upright[lang]).join(', ');
        return (baseMsg[lang] || baseMsg.en) + meanings;
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
        const lang = i18n.getCurrentLanguage();
        document.getElementById('card-detail').classList.remove('hidden');
        document.getElementById('detail-card-display').textContent = card.emoji;
        document.getElementById('detail-card-name').textContent = card.name[lang];
        document.getElementById('detail-meaning-upright').textContent = card.meanings.upright[lang];
        document.getElementById('detail-meaning-reversed').textContent = card.meanings.reversed[lang];
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
