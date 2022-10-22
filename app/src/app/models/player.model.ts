export type PlayerSignin = {
  amount: number;
  currency: string;
};

export type Player = {
  _id: string;
  born: Date;
  name: string;
  position: string;
  signin: PlayerSignin;
  thumbnail: string;
};
