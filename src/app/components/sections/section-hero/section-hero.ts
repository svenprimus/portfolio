import { Component, computed, inject } from '@angular/core';
import { ProfileFigure } from '../../elements/profile-figure/profile-figure';
import { Button } from '../../elements/button/button';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MobileService } from '../../../services/mobile-service';
import { NavigateService } from '../../../services/navigate-service';

@Component({
    imports: [ProfileFigure, Button, TranslatePipe],
    selector: 'app-section-hero',
    styleUrl: './section-hero.scss',
    templateUrl: './section-hero.html',
})
export class SectionHero {
    translate = inject(TranslateService);
    mobile = inject(MobileService);
    nav = inject(NavigateService);
    
    isDE = computed(()=>{
        return this.translate.currentLang() === 'de';
    });
}
