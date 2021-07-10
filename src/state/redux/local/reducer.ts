import ReducerBuilder from "state/redux/utils/factories/ReducerBuilder";
import { localSessionStarted } from "state/redux/local/actions";
import { localSessionStarted as localSessionStartedReducer } from "state/redux/local/reducers/localSessionStarted";
import { reducer as matchReducer } from "state/redux/match/reducer";

export const reducer = new ReducerBuilder()
  .setInitialState({
    started: true,
    roomId: null,
    matchId: null,
  })
  .addReducer(localSessionStarted.type, localSessionStartedReducer)
  .combine("match", matchReducer({ matchId: "LOCAL" }))
  .build();
