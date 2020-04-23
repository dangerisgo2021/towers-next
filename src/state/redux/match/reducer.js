import ReducerBuilder from "../../redux/utils/factories/ReducerBuilder";
import React from "react";
import { setup } from "../../engine/Towers/setup";
import { move } from "./actions";
import { applyMove } from "./reducers/applyMove";

const defaultInitialState = setup();

export const matchReducer = ({ initialValue = defaultInitialState, matchId }) =>
  new ReducerBuilder()
    .setInitialState({...initialValue, id: matchId})
    .addReducer(move.type, applyMove)
    .build();
