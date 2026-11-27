import { Service, signal } from '@angular/core';

@Service()
export class MobileService {
    canHover = signal<boolean>(window.matchMedia('(hover: hover)').matches);
}
