import { Component, ElementRef, inject } from '@angular/core';
import { Testimonial } from '../../elements/testimonial/testimonial';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollService } from '../../../services/scroll-service';

@Component({
    imports: [Testimonial, TranslatePipe],
    selector: 'app-section-testimonials',
    styleUrl: './section-testimonials.scss',
    templateUrl: './section-testimonials.html',
})
export class SectionTestimonials {
    scroll = inject(ScrollService);

    private el = inject(ElementRef);
    private observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                this.scroll.snapshot();
            } else if (this.scroll.isScrollingUp()) {
                entry.target.classList.remove('animate');
            }
        });
    });

    ngAfterViewInit(): void {
        const element = this.el.nativeElement.querySelector('.section-testimonials');
        this.observer.observe(element);
    }

    ngOnDestroy(): void {
        this.observer.disconnect();
    }
}
