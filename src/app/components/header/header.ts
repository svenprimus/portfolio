import { Component, inject, signal } from '@angular/core';
import { Socials } from '../elements/socials/socials';
import { Logo } from '../elements/logo/logo';
import { HeaderList } from '../elements/header-list/header-list';
import { HeaderService } from '../../services/header-service';

@Component({
    imports: [Socials, Logo, HeaderList],
    selector: 'app-header',
    host: { '(window:scroll)': 'fadeInOut()', '(window:scrollend)': 'fadeAfterTimeout()' },
    styleUrl: './header.scss',
    templateUrl: './header.html',
})
export class Header {
    headerService = inject(HeaderService);
    opacity = signal<number>(1.0);
    bg = signal<string>('transparent');
    pointerEvents: string = 'all';
    lastY: number | null = null;
    lastScrollEvent: number = 0;

    classListNavMobile = 'header-nav-mobile';
    classMobileDropdown = 'dropdown';

    fadeInOut() {
        const scroll = window.scrollY;
        this.lastY ??= scroll;
        const delta = scroll - this.lastY;
        this.opacity.set(Math.max(0, Math.min(1, this.opacity() - delta / (2 * 80))));
        this.lastY = scroll;
        const bgOpacity = Math.max(0, Math.min(Math.round(255 * 0.85), Math.round((scroll / (2 * 80)) * 255)));
        this.bg.set(scroll < 10 ? 'transparent' : '#0e1013' + bgOpacity.toString(16));
        this.pointerEvents = this.opacity() < 0.2 ? 'none' : 'all';
        this.lastScrollEvent = Date.now();
    }

    fadeAfterTimeout() {
        setTimeout(() => {
            if (Date.now() - this.lastScrollEvent > 5000 && this.bg() !== 'transparent') {
                this.bg.set('transparent');
                this.opacity.set(0);
                this.lastScrollEvent = Date.now();
            }
        }, 5000);
    }

    showMenu() {
        this.classListNavMobile += ` ${this.classMobileDropdown}`;
    }

    hideMenu() {
        this.classListNavMobile = this.classListNavMobile.replace(` ${this.classMobileDropdown}`, '');
    }
}
