import { Component } from '@angular/core';
import { SkillserviceService } from '../services/skillservice.service';
import { Skillset } from '../model/skillset';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.css'
})
export class SkillsetComponent {
  skillSets: Skillset[];



  constructor(private skillService: SkillserviceService) {
    this.skillSets = skillService.fetchAllSkillSet();


  }


}
