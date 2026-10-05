import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-skill',
  styleUrl: './skill.scss',
  templateUrl: './skill.html',
})
export class Skill {
  readonly src = input.required<string>();
  readonly alt = input<string>('');
}
