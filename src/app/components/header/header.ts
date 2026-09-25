import { Component } from '@angular/core';
import { Socials } from '../elements/socials/socials';
import { Logo } from '../elements/logo/logo';
import { HeaderList } from '../elements/header-list/header-list';

@Component({
    imports: [Socials, Logo, HeaderList],
    selector: 'app-header',
    host: { '(window:scroll)': 'fadeInOut()' },
    styleUrl: './header.scss',
    templateUrl: './header.html',
})
export class Header {
    opacity: number = 1.0;
    lastY: number | null = null;
    bg: string = 'transparent';
    classListNavMobile = 'header-nav-mobile';
    classMobileDropdown = 'dropdown';

    // TODO load default values from SCSS variables (?)
    fadeInOut() {
        const scroll = window.scrollY;
        this.lastY ??= scroll;
        const delta = scroll - this.lastY;
        this.opacity = Math.max(0, Math.min(1, this.opacity - delta / (2 * 80)));
        this.lastY = scroll;
        const bgOpacity = Math.max(0, Math.min(255, Math.round((scroll / (2 * 80)) * 255)));
        this.bg = scroll > 2 * 80 ? '#0e101380' : '#0e1013' + bgOpacity.toString(16);
    }

    showMenu() {
        this.classListNavMobile += ` ${this.classMobileDropdown}`;
    }

    hideMenu() {
        this.classListNavMobile = this.classListNavMobile.replace(` ${this.classMobileDropdown}`, '');
    }
}
