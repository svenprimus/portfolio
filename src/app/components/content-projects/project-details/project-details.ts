import { Component, inject, input } from '@angular/core';
import { Button } from '../../elements/button/button';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '../../elements/skill/skill';

@Component({
    imports: [Button, Skill],
    selector: 'app-project-details',
    styleUrl: './project-details.scss',
    templateUrl: './project-details.html',
})
export class ProjectDetails {
    private route = inject(ActivatedRoute);
    projectStr: string | null = null;
    underlineSrc: string = './assets/design/00_hand-drawn-lines/01_about-me/line.webp';

    constructor() {
        this.projectStr = this.route.snapshot.paramMap.get('name');
        if (this.projectStr?.length && this.projectStr?.length <= 6) {
            this.underlineSrc = this.underlineSrc.replace('line.webp', 'line-short.webp');
        }
    }
}
