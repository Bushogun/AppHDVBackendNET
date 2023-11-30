import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { EducationComponent } from './pages/education/education.component';
import { ExpComponent } from './pages/exp/exp.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReferencesComponent } from './pages/references/references.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

//localhost:4200/JonathanSoto

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'education', component: EducationComponent },
      { path: 'experience', component: ExpComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'references', component: ReferencesComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: 'profile' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HdvRoutingModule { }
