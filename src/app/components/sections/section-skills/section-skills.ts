import { Component, ElementRef, inject, signal } from '@angular/core';
import { Skill } from '../../elements/skill/skill';
import { TranslatePipe } from '@ngx-translate/core';
import { MobileService } from '../../../services/mobile-service';
import { ScrollService } from '../../../services/scroll-service';

@Component({
    imports: [Skill, TranslatePipe],
    selector: 'app-section-skills',
    styleUrl: './section-skills.scss',
    templateUrl: './section-skills.html',
})
export class SectionSkills {
    visibleLayerNow = signal<number>(3);
    mobile = inject(MobileService);
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
        const element = this.el.nativeElement.querySelector('.skills-column-wrapper');
        this.observer.observe(element);
    }

    ngOnDestroy(): void {
        this.observer.disconnect();
    }

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
