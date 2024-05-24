import { Injectable } from '@angular/core';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educations: Education[] = [
    { courseName: "B.E. Computer Science And Engg", localtion: "Bhopal, India", passingYear: "2017", percentage: "", university: "Rajive Gandhi Technical University" },
    { courseName: "12th Class", localtion: "Bhopal, India", passingYear: "2012", percentage: "", university: "Madhya Pradesh State Board" },
    { courseName: "10th Class", localtion: "Bhopal, India", passingYear: "2010", percentage: "", university: "Madhya Pradesh State Board" }
  ]

  constructor() { }

  fetchEducations(): Education[] {
    return this.educations;
  }
}
