import { Component, ElementRef, inject } from '@angular/core';
import { Button } from '../../elements/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigateService } from '../../../services/navigate-service';
import { ScrollService } from '../../../services/scroll-service';

@Component({
    imports: [Button, TranslatePipe],
    selector: 'app-section-about',
    styleUrl: './section-about.scss',
    templateUrl: './section-about.html',
})
export class SectionAbout {
    nav = inject(NavigateService);
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
        const element = this.el.nativeElement.querySelector('.section-about');
        this.observer.observe(element);
    }

    ngOnDestroy(): void {
        this.observer.disconnect();
    }
}
