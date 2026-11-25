import { Component, inject, output } from '@angular/core';
import { Logo } from '../logo/logo';
import { HeaderService } from '../../../services/header-service';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '../../../services/translation-service';
@Component({
    imports: [Logo, TranslatePipe],
    selector: 'app-header-list',
    styleUrl: './header-list.scss',
    templateUrl: './header-list.html',
})
export class HeaderList {
    headerService = inject(HeaderService);
    myTranslationService = inject(TranslationService);
    done = output<boolean>();
}
