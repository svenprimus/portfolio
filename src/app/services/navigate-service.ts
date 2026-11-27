import { inject, Service } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from './mobile-service';

@Service()
export class NavigateService {
    private router = inject(Router);
    private mobile = inject(MobileService);

    navigate(path: string, value?: string, fragment?: string, delay?: number) {
        setTimeout(
            () => {
                this.router.navigate(value ? [path, value] : [path], fragment ? { fragment: fragment } : undefined);
            },
            this.mobile.canHover() ? 0 : (delay ?? 0)
        );
    }
}
