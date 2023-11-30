import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'JonathanSoto',
    //component: ProfileComponent,
    loadChildren: () => import('./hdv/hdv.module').then( m => m.hdvmodule ),
  },
  // {
  //   path: 'Skills',
  //   component: SkillsComponent,
  // },
  // {
  //   path: 'Experience',
  //   component: ExpComponent,
  // },
  // {
  //   path: 'References',
  //   component: ReferencesComponent,
  // },
  // {
  //   path: 'Education',
  //   component: EducationComponent,
  // },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'JonathanSoto',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
