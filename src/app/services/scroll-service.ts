import { Service } from '@angular/core';

@Service()
export class ScrollService {
    lastScroll: number = window.scrollY;

    snapshot() {
        this.lastScroll = window.scrollY;
    }

    isScrollingUp(): boolean {
        const scroll = window.scrollY;
        const upwards = scroll < this.lastScroll;
        this.lastScroll = scroll;
        return upwards;
    }
}
