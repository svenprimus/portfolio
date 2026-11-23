import { Service, signal } from '@angular/core';

@Service()
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
