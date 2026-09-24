import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-socials',
  styleUrl: './socials.scss',
  templateUrl: './socials.html',
})
export class Socials {
  readonly bgColor = input.required<string>();
}
