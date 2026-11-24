import { Component, computed, inject } from '@angular/core';
import { ProfileFigure } from '../../elements/profile-figure/profile-figure';
import { Button } from '../../elements/button/button';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
    imports: [ProfileFigure, Button, RouterLink, TranslatePipe],
    selector: 'app-section-hero',
    styleUrl: './section-hero.scss',
    templateUrl: './section-hero.html',
})
export class SectionHero {
    translate = inject(TranslateService);
    isDE = computed(()=>{
        return this.translate.currentLang() === 'de-DE';
    });
}
