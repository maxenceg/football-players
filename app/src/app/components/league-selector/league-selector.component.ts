import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { League } from 'src/app/models/league.model';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-league-selector',
  templateUrl: './league-selector.component.html',
  styleUrls: ['./league-selector.component.sass'],
})
export class LeagueSelectorComponent implements OnInit {
  @Output() selectedLeagueEvent = new EventEmitter<League>();

  leagues: League[] = [];
  leagueOptions: League[] = [];
  filterString = '';
  errorMessage = '';
  shouldShowOptions = false;

  constructor(private leagueService: LeagueService) {}

  ngOnInit(): void {
    this.getAllLeagues();
  }

  getAllLeagues(): void {
    this.leagueService.getAll().subscribe({
      next: (data) => {
        this.leagues = data;
      },
      error: (e) => {
        this.errorMessage = e.message;
      },
    });
  }

  selectLeague(league: League) {
    this.filterString = league.name;
    this.selectedLeagueEvent.emit(league);
    this.shouldShowOptions = false;
  }

  filterLeagues(filterString: string) {
    this.shouldShowOptions = true;
    if (!filterString.length) {
      return;
    }

    this.leagueOptions = this.leagues.filter(({ name }) => {
      const regex = new RegExp(filterString, 'gi');
      name?.match(regex);
    });
  }

  hideOptions() {
    this.shouldShowOptions = false;
  }

  showOptions() {
    this.shouldShowOptions = this.filterString.length > 0;
  }
}
