import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DarkService {
    requiresDark = signal<boolean>(false);

    setDarkRequired(isDarkRequired: boolean) {
        this.requiresDark.set(isDarkRequired);
    }

    getDarkRequired() {
        return this.requiresDark();
    }
}
