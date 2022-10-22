import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { League } from '../models/league.model';
import { Team } from '../models/team.model';

const baseUrl = 'http://localhost:8080/leagues';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<League[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<League[]>(baseUrl, {
      headers,
    });
  }

  getLeagueTeams(leagueId: string): Observable<Team[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Team[]>(`${baseUrl}/${leagueId}/teams`, {
      headers,
    });
  }
}
