import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamsListComponent } from './components/teams-list/teams-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'teams-list', pathMatch: 'full' },
  { path: 'teams-list', component: TeamsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
