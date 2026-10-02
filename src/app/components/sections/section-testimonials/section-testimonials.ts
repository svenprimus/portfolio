import { Component } from '@angular/core';
import { Testimonial } from '../../elements/testimonial/testimonial';

@Component({
  imports: [Testimonial],
  selector: 'app-section-testimonials',
  styleUrl: './section-testimonials.scss',
  templateUrl: './section-testimonials.html',
})
export class SectionTestimonials {}
