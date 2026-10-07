import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeaderService {
    showSocialsDesktop = signal<boolean>(true);

    showSocialsOnDesktop(showSocialsOnDesktop: boolean) {
        this.showSocialsDesktop.set(showSocialsOnDesktop);
    }
}
