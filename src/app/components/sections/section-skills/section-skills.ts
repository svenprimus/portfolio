import { Component, signal } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-section-skills',
    styleUrl: './section-skills.scss',
    templateUrl: './section-skills.html',
})
export class SectionSkills {
    visibleLayerNow = signal<number>(3);

    peelOff() {
        const first = setTimeout(() => {
            this.visibleLayerNow.set(2);
            clearTimeout(first);
        }, 100);

        const second = setTimeout(() => {
            this.visibleLayerNow.set(1);
            clearTimeout(second);
        }, 200);
    }
}
