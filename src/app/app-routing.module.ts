import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsetComponent } from './skillset/skillset.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'skill',component:SkillsetComponent
  },
  {
    path: '',component:HomeComponent
  },
  {
    path: 'projects',component:ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
