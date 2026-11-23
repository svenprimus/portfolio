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

    label = computed(() => {
        return this.srcMap.get(this.skillStr())?.label;
    });

    srcMap = new Map<string, { src: string; alt: string; label: string }>([
        ['html', { src: './assets/icons/skills/html.svg', alt: 'HTML icon', label: 'HTML' }],
        ['css', { src: './assets/icons/skills/css.svg', alt: 'CSS icon', label: 'CSS' }],
        ['js', { src: './assets/icons/skills/js.svg', alt: 'JavaScript icon', label: 'JavaScript' }],
        ['ts', { src: './assets/icons/skills/ts.svg', alt: 'TypeScript icon', label: 'TypeScript' }],
        ['angular', { src: './assets/icons/skills/angular.svg', alt: 'Angular icon', label: 'Angular' }],
        ['supabase', { src: './assets/icons/skills/supabase.svg', alt: 'Supabase icon', label: 'Supabase' }],
        ['git', { src: './assets/icons/skills/git.svg', alt: 'Git icon', label: 'Git' }],
        ['rest', { src: './assets/icons/skills/rest-api.svg', alt: 'REST-API icon', label: 'REST-API' }],
        ['scrum', { src: './assets/icons/skills/scrum.svg', alt: 'Scrum icon', label: 'Scrum' }],
        [
            'material',
            {
                src: './assets/icons/skills/material-design.svg',
                alt: 'Material Design  icon',
                label: 'Material Design',
            },
        ],
    ]);
}
