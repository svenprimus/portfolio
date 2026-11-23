import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DarkService } from '../../services/dark-service';
import { HeaderService } from '../../services/header-service';
import { ProjectDetails } from './project-details/project-details';
import { ProjectsService } from '../../services/projects-service';

@Component({
    imports: [RouterLink, ProjectDetails],
    selector: 'app-content-projects',
    styleUrl: './content-projects.scss',
    templateUrl: './content-projects.html',
})
export class ContentProjects {
    darkService = inject(DarkService);
    headerService = inject(HeaderService);
    private route = inject(ActivatedRoute);
    projectStr: string | undefined = undefined;
    projectNextStr = signal<string | undefined>(undefined);
    projectPrevStr = signal<string | undefined>(undefined);
    projects = inject(ProjectsService);

    constructor() {
        this.route.paramMap.subscribe((params) => {
            this.projectStr = params.get('name') ?? undefined;
            if (this.projectStr) {
                this.projectNextStr.set(this.projects.getNextProjectUrl(this.projectStr));
                this.projectPrevStr.set(this.projects.getPrevProjectUrl(this.projectStr));
            }
        });
    }

    ngOnInit() {
        this.darkService.setDarkRequired(true);
        this.headerService.showSocialsOnDesktop(false);
        this.headerService.setFixed(false);
    }
}
