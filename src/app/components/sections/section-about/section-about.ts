import { Component, inject } from '@angular/core';
import { Button } from '../../elements/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigateService } from '../../../services/navigate-service';

@Component({
    imports: [Button, TranslatePipe],
    selector: 'app-section-about',
    styleUrl: './section-about.scss',
    templateUrl: './section-about.html',
})
export class SectionAbout {
    nav = inject(NavigateService);
}
