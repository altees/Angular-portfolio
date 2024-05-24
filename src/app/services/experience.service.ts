import { Injectable } from '@angular/core';
import { Experience } from '../model/experience';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  expArray: Experience[] = [
    { companyName: "AI ENTERPRISE", description: "Development of Reactive Rest APIs as per the requirments using Lagom , java8,akka toolkit . Developed role based authentication and authorization functionality using spring webflux security and JWT token and filters.", designation: "SENIOR DEVELOPER", duration: "Nov 2021 - Present", location: "Banglore, India" },
    { companyName: "QUALITY KIOSK TECHNOLOGIES", description: "Analyzing requirements and implementing testing software/web applications using java, scala scripts. Done performance ,load testing of the APIs using Gatling scala scripts", designation: "SENIOR SOFTWARE ENGINEER", duration: "MARCH-2021 – OCT-2021", location: "Navi Mumbai, India" },
    { companyName: "SYMBO INDIA INSURANCE BROKING LIMITED", description: "Development of microservices module as per the requirments using spring boot , spring cloud , java8 , aws. Handling Car, Bike insurance integration. Development of the APIs for POSP module. Fixing production issues", designation: "SOFTWARE DEVELOPER", duration: "NOVEMBER 2018– MARCH 2021", location: "Mumbai, India" }
  ];


  fetchExperience(): Experience[] {
    return this.expArray;
  }

  constructor() { }
}
