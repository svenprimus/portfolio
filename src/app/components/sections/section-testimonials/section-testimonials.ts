import { Component } from '@angular/core';
import { Testimonial } from '../../elements/testimonial/testimonial';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    imports: [Testimonial, TranslatePipe],
    selector: 'app-section-testimonials',
    styleUrl: './section-testimonials.scss',
    templateUrl: './section-testimonials.html',
})
export class SectionTestimonials {}
