import { Component, inject } from '@angular/core';
import { DarkService } from '../../services/dark-service';

@Component({
    imports: [],
    selector: 'app-content-legal',
    styleUrl: './content-legal.scss',
    templateUrl: './content-legal.html',
})
export class ContentLegal {
    darkService = inject(DarkService);

    constructor() {
        this.darkService.setFooterDark(true);
    }

    ngOnDestroy() {
        this.darkService.setFooterDark(false);
    }
}
