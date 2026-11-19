import { Component, inject } from '@angular/core';
import { Logo } from '../elements/logo/logo';
import { isActive, Router } from '@angular/router';

@Component({
    imports: [Logo],
    selector: 'app-footer',
    styleUrl: './footer.scss',
    templateUrl: './footer.html',
})
export class Footer {
    private router = inject(Router);
    isProjectPageActive = isActive('/projects', this.router, {
        paths: 'subset',
        queryParams: 'ignored',
        fragment: 'ignored',
        matrixParams: 'ignored',
    });
}
