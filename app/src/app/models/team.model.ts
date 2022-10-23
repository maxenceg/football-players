import { Player } from './player.model';

export type Team = {
  _id: string;
  name: string;
  thumbnail: string;
  players: Player[];
};

export type TeamResult =
  | {
      success: true;
      data: Team;
    }
  | { success: false; error: string };
