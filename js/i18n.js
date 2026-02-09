/* i18n - Multi-language Support (12 languages) */

class I18n {
    constructor() {
        this.translations = {};
        this.supportedLanguages = ['ko', 'en', 'zh', 'ja', 'hi', 'ru', 'es', 'pt', 'id', 'tr', 'de', 'fr'];
        this.currentLang = this.detectLanguage();
        this.initialized = false;
    }

    detectLanguage() {
        // Check localStorage first
        const saved = localStorage.getItem('selectedLanguage');
        if (saved && this.supportedLanguages.includes(saved)) {
            return saved;
        }

        // Check browser language
        const browserLang = navigator.language.split('-')[0];
        if (this.supportedLanguages.includes(browserLang)) {
            return browserLang;
        }

        // Default to English
        return 'en';
    }

    async loadTranslations(lang) {
        try {
            if (this.translations[lang]) {
                return this.translations[lang];
            }

            const response = await fetch(`js/locales/${lang}.json`);
            if (!response.ok) {
                console.warn(`Failed to load ${lang} translations, falling back to English`);
                return this.loadTranslations('en');
            }

            const data = await response.json();
            this.translations[lang] = data;
            return data;
        } catch (error) {
            console.error(`Error loading ${lang} translations:`, error);
            if (lang !== 'en') {
                return this.loadTranslations('en');
            }
            return {};
        }
    }

    async init(lang = null) {
        if (this.initialized) return;

        const targetLang = lang || this.currentLang;
        await this.loadTranslations(targetLang);
        this.currentLang = targetLang;
        this.updateUI();
        this.initialized = true;
    }

    t(key, defaultValue = key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return defaultValue;
            }
        }

        return typeof value === 'string' ? value : defaultValue;
    }

    updateUI() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const text = this.t(key);
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        });

        // Update all elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    }

    async setLanguage(lang) {
        if (!this.supportedLanguages.includes(lang)) {
            console.warn(`Language ${lang} not supported`);
            return;
        }

        await this.loadTranslations(lang);
        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        this.updateUI();

        // Dispatch custom event for other scripts
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    getLanguageName(lang) {
        const names = {
            ko: '한국어',
            en: 'English',
            zh: '简体中文',
            ja: '日本語',
            hi: 'हिन्दी',
            ru: 'Русский',
            es: 'Español',
            pt: 'Português',
            id: 'Bahasa Indonesia',
            tr: 'Türkçe',
            de: 'Deutsch',
            fr: 'Français'
        };
        return names[lang] || lang;
    }
}

// Create global i18n instance
const i18n = new I18n();
