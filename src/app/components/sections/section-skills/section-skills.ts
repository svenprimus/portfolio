import { Component, signal } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-section-skills',
    styleUrl: './section-skills.scss',
    templateUrl: './section-skills.html',
})
export class SectionSkills {
    visibleLayerNow = signal<number>(3);

    togglePeel() {
        if (this.visibleLayerNow() == 3) {
            this.peelOff();
        } else {
            this.stickOn();
        }
    }

    peelOff() {
        setTimeout(() => {
            this.visibleLayerNow.set(2);
        }, 100);

        setTimeout(() => {
            this.visibleLayerNow.set(1);
        }, 200);
    }

    stickOn() {
        setTimeout(() => {
            this.visibleLayerNow.set(2);
        }, 100);

        setTimeout(() => {
            this.visibleLayerNow.set(3);
        }, 200);
    }
}
