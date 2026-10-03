import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Button } from '../elements/button/button';

@Component({
    imports: [RouterLink, Button],
    selector: 'app-content-projects',
    styleUrl: './content-projects.scss',
    templateUrl: './content-projects.html',
})
export class ContentProjects {
    private route = inject(ActivatedRoute);
    projectStr: string | null;

    constructor() {
        this.projectStr = this.route.snapshot.paramMap.get('name');
    }
}
