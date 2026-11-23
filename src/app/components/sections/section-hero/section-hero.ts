import { Component } from '@angular/core';
import { ProfileFigure } from '../../elements/profile-figure/profile-figure';
import { Button } from '../../elements/button/button';
import { RouterLink } from '@angular/router';

@Component({
    imports: [ProfileFigure, Button, RouterLink],
    selector: 'app-section-hero',
    styleUrl: './section-hero.scss',
    templateUrl: './section-hero.html',
})
export class SectionHero {}
