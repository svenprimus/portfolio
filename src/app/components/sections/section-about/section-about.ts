import { Component } from '@angular/core';
import { Button } from '../../elements/button/button';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [Button, RouterLink, TranslatePipe],
  selector: 'app-section-about',
  styleUrl: './section-about.scss',
  templateUrl: './section-about.html',
})
export class SectionAbout {}
