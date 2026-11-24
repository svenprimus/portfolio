import { Component, inject, SecurityContext, signal } from '@angular/core';
import { Logo } from '../logo/logo';
import { HeaderService } from '../../../services/header-service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    imports: [Logo, TranslatePipe],
    selector: 'app-header-list',
    styleUrl: './header-list.scss',
    templateUrl: './header-list.html',
})
export class HeaderList {
    headerService = inject(HeaderService);
    languageSliderValue = signal<number>(0);

    private translate = inject(TranslateService);

    constructor(private sanitizer: DomSanitizer) {}

    useLanguage(language: string): void {
        this.languageSliderValue.set(language === 'de-DE' ? 1 : 0);
        this.translate.use(language);
    }

    toggleLanguage() {
        const html = this.translate.instant('legal.acceptance.text');
        this.useLanguage(this.languageSliderValue() === 1 ? 'en-US' : 'de-DE');
    }
}
