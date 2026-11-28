import { Component, inject, signal } from '@angular/core';
import { Button } from '../../elements/button/button';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '../../elements/skill/skill';
import { ProjectsService } from '../../../services/projects-service';
import { IProject } from '../../../interfaces/iproject';
import { TranslatePipe } from '@ngx-translate/core';
import { MobileService } from '../../../services/mobile-service';
@Component({
    imports: [Button, Skill, TranslatePipe],
    selector: 'app-project-details',
    styleUrl: './project-details.scss',
    templateUrl: './project-details.html',
})
export class ProjectDetails {
    private route = inject(ActivatedRoute);
    private projects = inject(ProjectsService);
    mobile = inject(MobileService);
    projectStr: string | undefined = undefined;

    readonly project = signal<IProject | undefined>(undefined);
    readonly underlineSrc = signal<string>('./assets/design/00_hand-drawn-lines/01_about-me/line.webp');
    readonly featuredSrc = signal<string>('./assets/design/03_stickers/00_round/sticker-brand-green.webp');

    constructor() {
        this.route.paramMap.subscribe((params) => {
            this.projectStr = params.get('name') ?? undefined;
            if (this.projectStr) {
                this.loadProject();
            }
        });
    }

    loadProject() {
        this.project.set(this.projects.getProject(this.projectStr));
        const project = this.project();
        if (project && project.title.length <= 6) {
            this.underlineSrc.set(this.underlineSrc().replace('line.webp', 'line-short.webp'));
        }
        this.featuredSrc.set(
            this.project()?.featured
                ? './assets/design/03_stickers/00_round/sticker-projects.webp'
                : './assets/design/03_stickers/00_round/sticker-brand-green.webp'
        );
    }

    openLink(url: string | undefined) {
        if (url) {
            setTimeout(
                () => {
                    window.open(url, '_blank');
                },
                this.mobile.canHover() ? 0 : 100
            );
        }
    }
}
