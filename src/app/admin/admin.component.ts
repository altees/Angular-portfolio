import { Component } from '@angular/core';
import { SkillserviceService } from '../services/skillservice.service';
import { Skillset } from '../model/skillset';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  skillSets: Skillset[];

  constructor(skillService:SkillserviceService){
    this.skillSets=skillService.fetchAllSkillSet();

  }

}
