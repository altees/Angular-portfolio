import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skillset } from '../model/skillset';

@Injectable({
  providedIn: 'root'
})
export class SkillserviceService {

  skillSets: Skillset[] = [
    { skillName: 'Java', skillPercentage: 90 },
    { skillName: 'SpringBoot', skillPercentage: 80 },
    { skillName: 'Angular', skillPercentage: 50 }
  ];

  constructor(private http: HttpClient) { }

  fetchAllSkillSet(): Skillset[] {
    return this.skillSets;
  }
}
