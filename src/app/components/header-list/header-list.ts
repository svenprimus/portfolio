import { Component} from '@angular/core';
import { Logo } from '../logo/logo';

@Component({
    imports: [Logo],
    selector: 'app-header-list',
    styleUrl: './header-list.scss',
    templateUrl: './header-list.html',
})
export class HeaderList {
}
