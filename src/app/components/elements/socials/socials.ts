import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-socials',
  styleUrl: './socials.scss',
  templateUrl: './socials.html',
})
export class Socials {
  readonly bgColor = input.required<string>();
  readonly flexDir = input.required<string>();
}
