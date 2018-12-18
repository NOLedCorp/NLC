import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TeamComponent } from './team/team.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
