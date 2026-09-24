import { Component } from '@angular/core';
import { ProfileFigure } from '../profile-figure/profile-figure';
import { Button } from '../button/button';

@Component({
  imports: [ProfileFigure, Button],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}
