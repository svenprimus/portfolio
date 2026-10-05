import { Component, inject } from '@angular/core';
import { SectionHero } from '../sections/section-hero/section-hero';
import { SectionAbout } from '../sections/section-about/section-about';
import { SectionSkills } from '../sections/section-skills/section-skills';
import { SectionProjects } from '../sections/section-projects/section-projects';
import { SectionTestimonials } from '../sections/section-testimonials/section-testimonials';
import { SectionContact } from '../sections/section-contact/section-contact';
import { DarkService } from '../../services/dark_service';
import { HeaderService } from '../../services/header_service';

@Component({
    imports: [SectionHero, SectionAbout, SectionSkills, SectionProjects, SectionTestimonials, SectionContact],
    selector: 'app-content-main',
    styleUrl: './content-main.scss',
    templateUrl: './content-main.html',
})
export class ContentMain {
    darkService = inject(DarkService);
    headerService = inject(HeaderService);

    ngOnInit() {
        this.darkService.setDarkRequired(false);
        this.headerService.showSocialsOnDesktop(true);
    }
}
