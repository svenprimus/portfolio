import { Component } from '@angular/core';
import { Logo } from '../elements/logo/logo';

@Component({
  imports: [Logo],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {}
