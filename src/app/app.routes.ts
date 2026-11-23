import { Routes } from '@angular/router';
import { ContentMain } from './components/content-main/content-main';
import { ContentProjects } from './components/content-projects/content-projects';
import { ContentLegal } from './components/content-legal/content-legal';

export const routes: Routes = [
    {
        path: '',
        component: ContentMain,
    },
    {
        path: 'projects/:name',
        component: ContentProjects,
    },
    {
        path: 'legal',
        component: ContentLegal,
    },
    { path: '**', redirectTo: '' },
];
