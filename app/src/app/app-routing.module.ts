import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  { path: '', redirectTo: 'teams-list', pathMatch: 'full' },
  { path: 'teams-list', component: TeamsListComponent },
  { path: 'team/:teamId', component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
