import { Component, OnInit } from '@angular/core';
import { Education } from '../model/education';
import { EducationService } from '../services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {

  educations: Education[];


  constructor(educationService: EducationService) {
    this.educations = educationService.fetchEducations();
  }

  ngOnInit(): void {

  }

}
