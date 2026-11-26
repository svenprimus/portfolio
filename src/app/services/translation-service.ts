import { inject, Service, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Service()
export class TranslationService {
    private translate = inject(TranslateService);
    languageSliderValue = signal<number>(0);
    savedLanguage = signal<string | null>(null);

    constructor() {
        this.savedLanguage.set(localStorage.getItem('language'));
        if (this.savedLanguage()) {
            this.useLanguage(this.savedLanguage());
        }
    }

    useLanguage(language: string | null): void {
        if (language !== null) {
            this.languageSliderValue.set(language === 'de' ? 1 : 0);
            this.translate.use(language);
            localStorage.setItem('language', language);
        }
    }

    toggleLanguage() {
        this.useLanguage(this.languageSliderValue() === 1 ? 'en' : 'de');
    }
}
