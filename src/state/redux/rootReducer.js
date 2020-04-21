import { routerReducer } from "connected-next-router";

import ReducerBuilder from "./utils/factories/ReducerBuilder";
import { v1 as uuidv1 } from "uuid";
import { reducer as siderReducer } from "./sider/reducer";
import { reducer as navigationReducer } from "./nav/reducer";
import { reducer as authReducer } from "./auth/reducer";
import { reducer as localReducer } from "./local/reducer";
import { reducer as modalsReducer } from "./modals/reducer";
import { reducer as createRoomModalReducer } from "./createRoomModal/reducer";

const sessionReducer = new ReducerBuilder()
  .setInitialState({
    id: uuidv1(),
  })
  .build();

const rootReducerBuilder = new ReducerBuilder()
  .combine("auth", authReducer)
  .combine("local", localReducer)
  .combine("modals", modalsReducer)
  .combine("nav", navigationReducer)
  .combine("router", routerReducer)
  .combine("session", sessionReducer)
  .combine("sider", siderReducer)
  .combine("createRoomModal", createRoomModalReducer);

export const rootReducer = rootReducerBuilder.build();
