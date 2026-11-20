import { Component, computed, input } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-skill',
    styleUrl: './skill.scss',
    templateUrl: './skill.html',
})
export class Skill {
    readonly skillStr = input.required<string>();
    readonly isSmall = input<boolean>(false);

    src = computed(() => {
        return this.srcMap.get(this.skillStr())?.src;
    });

    alt = computed(() => {
        return this.srcMap.get(this.skillStr())?.alt;
    });

    srcMap = new Map<string, { src: string; alt: string }>([
        ['html', { src: './assets/icons/skills/html.svg', alt: 'HTML icon' }],
        ['css', { src: './assets/icons/skills/css.svg', alt: 'CSS icon' }],
        ['js', { src: './assets/icons/skills/js.svg', alt: 'JavaScript icon' }],
        ['ts', { src: './assets/icons/skills/ts.svg', alt: 'TypeScript icon' }],
        ['angular', { src: './assets/icons/skills/angular.svg', alt: 'Angular icon' }],
        ['supabase', { src: './assets/icons/skills/supabase.svg', alt: 'Supabase icon' }],
        ['git', { src: './assets/icons/skills/git.svg', alt: 'Git icon' }],
        ['rest', { src: './assets/icons/skills/rest-api.svg', alt: 'REST-API icon' }],
        ['scrum', { src: './assets/icons/skills/scrum.svg', alt: 'Scrum icon' }],
        ['material', { src: './assets/icons/skills/material-design.svg', alt: 'Material Design  icon' }],
    ]);
}
