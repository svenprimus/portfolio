import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeaderService {
    showSocialsDesktop = signal<boolean>(true);
    isFixed = signal<boolean>(true);

    showSocialsOnDesktop(showSocialsOnDesktop: boolean) {
        this.showSocialsDesktop.set(showSocialsOnDesktop);
    }

    setFixed(isFixed: boolean) {
        this.isFixed.set(isFixed);
    }
}
