import { Routes } from '@angular/router';
import { ContentMain } from './components/content-main/content-main';
import { ContentProjects } from './components/content-projects/content-projects';

export const routes: Routes = [
    {
        path: '',
        component: ContentMain,
    },
    {
        path: 'projects/:name',
        component: ContentProjects,
    },
];
