import { Component } from '@angular/core';
import { Button } from '../../elements/button/button';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    imports: [Button, RouterLink, TranslatePipe],
    selector: 'app-section-projects',
    styleUrl: './section-projects.scss',
    templateUrl: './section-projects.html',
})
export class SectionProjects {}
