import { Component } from '@angular/core';
import { ProfileFigure } from '../profile-figure/profile-figure';

@Component({
  imports: [ProfileFigure],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}
