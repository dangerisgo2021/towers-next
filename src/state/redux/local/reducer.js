import ReducerBuilder from "../utils/factories/ReducerBuilder";
import React from "react";
import { localSessionStarted } from "./actions";
import { localSessionStarted as localSessionStartedReducer } from "./reducers/localSessionStarted";
import { reducer as matchReducer } from "../match/reducer";

export const reducer = new ReducerBuilder()
  .setInitialState({
    started: true,
    roomId: null,
    matchId: null,
  })
  .addReducer(localSessionStarted.type, localSessionStartedReducer)
  .combine("match", matchReducer({ matchId: "LOCAL" }))
  .build();
