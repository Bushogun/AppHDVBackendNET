import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './pages/education/education.component';
import { ExpComponent } from './pages/exp/exp.component';
import { ReferencesComponent } from './pages/references/references.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HdvRoutingModule } from './hdv-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PersonalInfoService } from '../../app/services/PersonalInfo.service';

@NgModule({
  declarations: [
    LayoutPageComponent,
    ProfileComponent,
    EducationComponent,
    ExpComponent,
    ProfileComponent,
    ReferencesComponent,
    SkillsComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    HdvRoutingModule,
    SharedModule,
    FontAwesomeModule,
  ]
})
 export class hdvmodule { }
