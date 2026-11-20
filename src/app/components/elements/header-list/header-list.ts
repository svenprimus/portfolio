import { Component, inject} from '@angular/core';
import { Logo } from '../logo/logo';
import { HeaderService } from '../../../services/header-service';

@Component({
    imports: [Logo],
    selector: 'app-header-list',
    styleUrl: './header-list.scss',
    templateUrl: './header-list.html',
})
export class HeaderList {
    headerService = inject(HeaderService);
}
