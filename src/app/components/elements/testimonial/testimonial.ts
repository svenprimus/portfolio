import { Component, input } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-testimonial',
    styleUrl: './testimonial.scss',
    templateUrl: './testimonial.html',
})
export class Testimonial {
    static count: number = 0;
    static lastRotation: number = 4;
    rotation: number = -4;
    imgSrc: string | null = null;
    readonly author = input.required<string>();
    readonly role = input.required<string>();
    readonly linkedInUrl = input.required<string>();

    constructor() {
        Testimonial.count++;
        const isUneven = Testimonial.count % 2 != 0;
        this.imgSrc = isUneven
            ? './assets/design/03_stickers/02_testimonials/A.webp'
            : './assets/design/03_stickers/02_testimonials/B.webp';
        this.rotation = isUneven ? -1 * Testimonial.lastRotation : 0;
        Testimonial.lastRotation = isUneven ? this.rotation : Testimonial.lastRotation;
    }
}
