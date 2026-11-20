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
    projectStr: string | null;

    constructor() {
        this.projectStr = this.route.snapshot.paramMap.get('name');
    }

}
