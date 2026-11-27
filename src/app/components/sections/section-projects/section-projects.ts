import { Component, inject } from '@angular/core';
import { Button } from '../../elements/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigateService } from '../../../services/navigate-service';

@Component({
    imports: [Button, TranslatePipe],
    selector: 'app-section-projects',
    styleUrl: './section-projects.scss',
    templateUrl: './section-projects.html',
})
export class SectionProjects {
    nav = inject(NavigateService);
}
