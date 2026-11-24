import { Component, computed, inject } from '@angular/core';
import { Logo } from '../elements/logo/logo';
import { isActive, Router, RouterLink } from '@angular/router';
import { DarkService } from '../../services/dark-service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    imports: [Logo, RouterLink, TranslatePipe],
    selector: 'app-footer',
    styleUrl: './footer.scss',
    templateUrl: './footer.html',
})
export class Footer {
    private router = inject(Router);
    readonly darkService = inject(DarkService);

    colorMode = computed(() => {
        return this.darkService.footerDark() ? '#0e1013' : '#f8f9fa';
    });

    isProjectPageActive = isActive('/projects', this.router, {
        paths: 'subset',
        queryParams: 'ignored',
        fragment: 'ignored',
        matrixParams: 'ignored',
    });
}
