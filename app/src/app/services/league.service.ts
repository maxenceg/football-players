import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LeaguesResult, LeagueTeamsResult } from '../models/league.model';

const baseUrl = 'http://localhost:8080/leagues';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<LeaguesResult> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<LeaguesResult>(baseUrl, {
      headers,
    });
  }

  getLeagueTeams(leagueId: string): Observable<LeagueTeamsResult> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<LeagueTeamsResult>(`${baseUrl}/${leagueId}/teams`, {
      headers,
    });
  }
}
