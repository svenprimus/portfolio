import { Component } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
  imports: [Hero],
  selector: 'app-content-main',
  styleUrl: './content-main.scss',
  templateUrl: './content-main.html',
})
export class ContentMain {}
