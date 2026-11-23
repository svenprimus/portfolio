import { Service, signal } from '@angular/core';

@Service()
export class DarkService {
    requiresDark = signal<boolean>(false);
    footerDark = signal<boolean>(false);

    setDarkRequired(isDarkRequired: boolean) {
        this.requiresDark.set(isDarkRequired);
    }

    getDarkRequired() {
        return this.requiresDark();
    }

    setFooterDark(isDarkRequired: boolean) {
        this.footerDark.set(isDarkRequired);
    }
}
