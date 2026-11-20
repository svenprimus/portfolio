import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DarkService } from '../../services/dark-service';
import { HeaderService } from '../../services/header-service';
import { ProjectDetails } from './project-details/project-details';

@Component({
    imports: [RouterLink, ProjectDetails],
    selector: 'app-content-projects',
    styleUrl: './content-projects.scss',
    templateUrl: './content-projects.html',
})
export class ContentProjects {
    darkService = inject(DarkService);
    headerService = inject(HeaderService);

    ngOnInit() {
        this.darkService.setDarkRequired(true);
        this.headerService.showSocialsOnDesktop(false);
        this.headerService.setFixed(false);
    }
}
