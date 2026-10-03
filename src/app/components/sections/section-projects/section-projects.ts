import { Component } from '@angular/core';
import { Button } from '../../elements/button/button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Button, RouterLink],
  selector: 'app-section-projects',
  styleUrl: './section-projects.scss',
  templateUrl: './section-projects.html',
})
export class SectionProjects {}
