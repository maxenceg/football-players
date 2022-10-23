import { Team } from './team.model';

export type League = {
  _id: string;
  name: string;
  sport: string;
  teams: string[];
};

export type LeaguesResult =
  | {
      success: true;
      data: League[];
    }
  | { success: false; error: string };

export type LeagueTeamsResult =
  | {
      success: true;
      data: Team[];
    }
  | { success: false; error: string };
