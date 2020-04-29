import ReducerBuilder from "./utils/factories/ReducerBuilder";
import { reducer as siderReducer } from "./sider/reducer";
import { reducer as navigationReducer } from "./nav/reducer";
import { reducer as authReducer } from "./auth/reducer";
import { reducer as localReducer } from "./local/reducer";
import { reducer as modalsReducer } from "./modals/reducer";
import { reducer as createRoomModalReducer } from "./createRoomModal/reducer";
import { reducer as sessionReducer } from "./session/reducer";

const rootReducerBuilder = new ReducerBuilder()
  .combine("auth", authReducer)
  .combine("createRoomModal", createRoomModalReducer)
  .combine("local", localReducer)
  .combine("modals", modalsReducer)
  .combine("nav", navigationReducer)
  .combine("session", sessionReducer)
  .combine("sider", siderReducer);

export const rootReducer = rootReducerBuilder.build();
