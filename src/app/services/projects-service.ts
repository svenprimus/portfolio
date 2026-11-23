import { Service } from '@angular/core';
import { IProject } from '../interfaces/iproject';
import projects from '../data/projects-db.json';

@Service()
export class ProjectsService {
    private projects = projects;

    getProject(key: string | undefined): IProject | undefined {
        return key ? this.projects.find((project) => project.key === key) : undefined;
    }

    getNextProjectUrl(keyCurrent: string | undefined): string | undefined {
        const idx = keyCurrent ? this.projects.findIndex((project) => project.key === keyCurrent) : -1;
        return idx >= 0 ? this.projects.at(idx + 1)?.key : undefined;
    }

    getPrevProjectUrl(keyCurrent: string | undefined): string | undefined {
        const idx = keyCurrent ? this.projects.findIndex((project) => project.key === keyCurrent) : -1;
        return idx > 0 ? this.projects.at(idx - 1)?.key : undefined;
    }
}
