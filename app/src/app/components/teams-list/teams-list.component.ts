import { Component, OnInit } from '@angular/core';
import { League } from 'src/app/models/league.model';
import { Team } from 'src/app/models/team.model';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.sass'],
})
export class TeamsListComponent implements OnInit {
  teams: Team[] = [];
  selectedLeague?: League;
  filterString = '';
  errorMessage = '';

  constructor(private leagueService: LeagueService) {}

  ngOnInit(): void {}

  setSelectedLeague(league: League) {
    this.selectedLeague = league;
    this.leagueService.getLeagueTeams(league._id).subscribe({
      next: (data) => {
        this.teams = data;
      },
      error: (e) => {
        this.errorMessage = e.message;
      },
    });
  }
}
