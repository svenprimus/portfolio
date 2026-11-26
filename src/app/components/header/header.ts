import { Component, inject, signal } from '@angular/core';
import { Socials } from '../elements/socials/socials';
import { Logo } from '../elements/logo/logo';
import { HeaderList } from '../elements/header-list/header-list';
import { HeaderService } from '../../services/header-service';
import { DarkService } from '../../services/dark-service';

@Component({
    imports: [Socials, Logo, HeaderList],
    selector: 'app-header',
    host: { '(window:scroll)': 'fadeInOut()', '(window:scrollend)': 'fadeAfterTimeout()' },
    styleUrl: './header.scss',
    templateUrl: './header.html',
})
export class Header {
    headerService = inject(HeaderService);
    darkService = inject(DarkService);
    opacity = signal<number>(1.0);
    bg = signal<string>('transparent');
    pointerEvents: string = 'all';
    lastY: number | null = null;
    lastScrollEvent: number = 0;
    isAtTop: boolean = true;

    classListNavMobile = 'header-nav-mobile';
    classMobileDropdown = 'dropdown';

    fadeInOut() {
        const scroll = window.scrollY;
        this.lastY ??= scroll;
        const delta = scroll - this.lastY;
        this.opacity.set(Math.max(0, Math.min(1, this.opacity() - delta / (2 * 80))));
        this.lastY = scroll;
        const bgOpacity = Math.max(0, Math.min(Math.round(255 * 0.85), Math.round((scroll / (2 * 80)) * 255)));
        const minBackground = this.darkService.socialMinBg() ? '#0e101380' : 'transparent';
        this.isAtTop = scroll < 10;
        this.bg.set(this.isAtTop ? minBackground : '#0e1013' + bgOpacity.toString(16));
        this.pointerEvents = this.opacity() < 0.2 ? 'none' : 'all';
        this.setLastScrollEvent();
    }

    fadeIn() {
        if (!this.isAtTop) {
            this.bg.set('#0e1013d9');
            this.opacity.set(1.0);
            this.pointerEvents = 'all';
        }
    }

    fadeAfterTimeout() {
        setTimeout(() => {
            if (Date.now() - this.lastScrollEvent > 5000 && this.bg() !== 'transparent' && !this.isAtTop) {
                this.bg.set('transparent');
                this.opacity.set(0);
                this.pointerEvents = 'none';
                this.setLastScrollEvent();
            }
        }, 5000);
    }

    setLastScrollEvent() {
        this.lastScrollEvent = Date.now();
    }

    showMenu() {
        this.classListNavMobile += ` ${this.classMobileDropdown}`;
    }

    hideMenu() {
        this.classListNavMobile = this.classListNavMobile.replace(` ${this.classMobileDropdown}`, '');
    }
}
