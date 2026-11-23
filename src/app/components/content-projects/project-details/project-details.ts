import { Component, inject, input } from '@angular/core';
import { Button } from '../../elements/button/button';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '../../elements/skill/skill';
import { ProjectsService } from '../../../services/projects-service';
import { IProject } from '../../../interfaces/iproject';
@Component({
    imports: [Button, Skill],
    selector: 'app-project-details',
    styleUrl: './project-details.scss',
    templateUrl: './project-details.html',
})
export class ProjectDetails {
    private route = inject(ActivatedRoute);
    private projects = inject(ProjectsService);
    readonly project: IProject | undefined = undefined;

    projectStr: string | undefined = undefined;
    underlineSrc: string = './assets/design/00_hand-drawn-lines/01_about-me/line.webp';

    constructor() {
        this.projectStr = this.route.snapshot.paramMap.get('name') ?? undefined;
        this.project = this.projects.getProject(this.projectStr);
        if (this.project && this.project.title.length <= 6) {
            this.underlineSrc = this.underlineSrc.replace('line.webp', 'line-short.webp');
        }
    }

    openLink(url: string | undefined) {
        if (url) {
            window.open(url, '_blank');
        }
    }
}
