import { Component, inject } from '@angular/core';
import { DarkService } from '../../services/dark-service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    imports: [TranslatePipe],
    selector: 'app-content-legal',
    styleUrl: './content-legal.scss',
    templateUrl: './content-legal.html',
})
export class ContentLegal {
    darkService = inject(DarkService);

    constructor() {
        this.darkService.setFooterDark(true);
        this.darkService.setSocialMinBg(true);
    }

    ngOnDestroy() {
        this.darkService.setFooterDark(false);
        this.darkService.setSocialMinBg(false);
    }
}
