import { Service } from '@angular/core';
import { IProject } from '../interfaces/iproject';
import projects from '../data/projects-db.json';

@Service()
export class ProjectsService {
    private projects = projects;

    getProject(key: string | undefined): IProject | undefined {
        return key ? this.projects.find((project) => project.key === key) : undefined;
    }
}
