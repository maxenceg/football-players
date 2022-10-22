import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamComponent } from './components/team/team.component';
import { LeagueSelectorComponent } from './components/league-selector/league-selector.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { PriceFormatterPipe } from './pipes/price-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeagueSelectorComponent,
    PriceFormatterPipe,
    TeamComponent,
    TeamsListComponent,
    SearchFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
