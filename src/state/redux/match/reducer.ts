import ReducerBuilder from "state/redux/utils/factories/ReducerBuilder";
import { setup } from "state/engine/towers/setup";
import { move } from "state/redux/match/actions";
import { applyMove } from "state/redux/match/reducers/applyMove";

const defaultInitialState = setup();

export const reducer = ({ initialValue = defaultInitialState, matchId }) =>
  new ReducerBuilder()
    .setInitialState({ ...initialValue, id: matchId })
    .addReducer(move.type, applyMove)
    .build();
