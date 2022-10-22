import { TeamService } from '../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass'],
})
export class TeamComponent implements OnInit {
  errorMessage = '';
  team?: Team;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTeamInfo(this.route.snapshot.params['teamId']);
  }

  getTeamInfo(teamId: string): void {
    this.teamService.getTeamInfo(teamId).subscribe({
      next: (data) => {
        this.team = data;
      },
      error: (e) => {
        this.errorMessage = e.message;
      },
    });
  }
}
