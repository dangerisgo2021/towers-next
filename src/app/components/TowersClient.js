import { Client } from "boardgame.io/react";
import { Towers } from "../../state/engine/game";
import { TowersBoard } from "./TowersBoard";

export const TowersClient = Client({
  game: Towers,
  board: TowersBoard,
  debug: false,
});
