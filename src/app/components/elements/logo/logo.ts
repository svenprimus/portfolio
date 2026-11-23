import { Component, inject, input } from '@angular/core';
import { DarkService } from '../../../services/dark-service';

@Component({
    imports: [],
    selector: 'app-logo',
    styleUrl: './logo.scss',
    templateUrl: './logo.html',
})
export class Logo {
    darkService = inject(DarkService);
    light = input<boolean | undefined>(undefined);
    isFooter = input<boolean>(false);
}
