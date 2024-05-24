import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects: Project[];

  constructor(private projectService: ProjectService) {
    this.projects = projectService.fetchAllProjects();
  }

}
