import { routerReducer } from "connected-next-router";

import ReducerBuilder from "./utils/factories/ReducerBuilder";
import { v1 as uuidv1 } from "uuid";
import { reducer as siderReducer } from "./sider/reducer";

const sessionReducer = new ReducerBuilder()
  .setInitialState({
    id: uuidv1(),
  })
  .build();

const rootReducerBuilder = new ReducerBuilder()
  .combine("session", sessionReducer)
  .combine("router", routerReducer)
  .combine("sider", siderReducer);

export const rootReducer = rootReducerBuilder.build();
