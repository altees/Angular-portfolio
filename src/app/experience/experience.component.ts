import { Component } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { Experience } from '../model/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

      expArray:Experience[];

  constructor(expService: ExperienceService) {
    this.expArray=expService.fetchExperience();
  }

}
