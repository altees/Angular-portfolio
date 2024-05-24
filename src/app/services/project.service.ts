import { Injectable } from '@angular/core';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }


  fetchAllProjects(): Project[] {
    return [{
      projectTitle: "BMUSA",
      projectDescription: "undefined",
      role: "undefined",
      skillUsed: "undefined",
      duration: "undefined"
    }, {
      projectTitle: "Symbo Insurance",
      projectDescription: "undefined",
      role: "undefined",
      skillUsed: "undefined",
      duration: "undefined"
    }
      , {
      projectTitle: "undefined",
      projectDescription: "undefined",
      role: "undefined",
      skillUsed: "undefined",
      duration: "undefined"
    }]
  }
}
