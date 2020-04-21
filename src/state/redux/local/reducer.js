import ReducerBuilder from "../utils/factories/ReducerBuilder";
import React from "react";
import { localSessionStarted } from "./actions";
import { localSessionStarted as localSessionStartedReducer } from "./reducers/localSessionStarted";

export const reducer = new ReducerBuilder()
  .setInitialState({
    started: false,
  })
  .addReducer(localSessionStarted.type, localSessionStartedReducer)
  .build();
