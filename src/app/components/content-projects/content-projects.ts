import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Button } from '../elements/button/button';
import { DarkService } from '../../services/dark_service';

@Component({
    imports: [RouterLink, Button],
    selector: 'app-content-projects',
    styleUrl: './content-projects.scss',
    templateUrl: './content-projects.html',
})
export class ContentProjects {
    private route = inject(ActivatedRoute);
    projectStr: string | null;
    darkService = inject(DarkService);

    constructor() {
        this.projectStr = this.route.snapshot.paramMap.get('name');
    }

    ngOnInit() {
        this.darkService.setDarkRequired(true);
    }
}
