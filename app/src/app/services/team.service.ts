import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Team } from '../models/team.model';

const baseUrl = 'http://localhost:8080/teams';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  getTeamInfo(teamId: string): Observable<Team> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Team>(`${baseUrl}/${teamId}`, {
      headers,
    });
  }
}
