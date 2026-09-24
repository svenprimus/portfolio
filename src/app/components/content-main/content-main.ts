import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { SectionAbout } from '../section-about/section-about';
import { SectionSkills } from '../section-skills/section-skills';
import { SectionProjects } from '../section-projects/section-projects';
import { SectionTestimonials } from '../section-testimonials/section-testimonials';
import { SectionContact } from '../section-contact/section-contact';

@Component({
    imports: [Hero, SectionAbout, SectionSkills, SectionProjects, SectionTestimonials, SectionContact],
    selector: 'app-content-main',
    styleUrl: './content-main.scss',
    templateUrl: './content-main.html',
})
export class ContentMain {}
