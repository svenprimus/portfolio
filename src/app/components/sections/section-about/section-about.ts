import { Component } from '@angular/core';
import { Button } from '../../elements/button/button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Button, RouterLink],
  selector: 'app-section-about',
  styleUrl: './section-about.scss',
  templateUrl: './section-about.html',
})
export class SectionAbout {}
