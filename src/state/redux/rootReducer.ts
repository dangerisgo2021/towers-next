import ReducerBuilder from "state/redux/utils/factories/ReducerBuilder";
import { reducer as siderReducer } from "state/redux/sider/reducer";
import { reducer as navigationReducer } from "state/redux/nav/reducer";
import { reducer as authReducer } from "state/redux/auth/reducer";
import { reducer as localReducer } from "state/redux/local/reducer";
import { reducer as modalsReducer } from "state/redux/modals/reducer";
import { reducer as createRoomModalReducer } from "state/redux/createRoomModal/reducer";
import { reducer as sessionReducer } from "state/redux/session/reducer";

const rootReducerBuilder = new ReducerBuilder()
  .combine("auth", authReducer)
  .combine("createRoomModal", createRoomModalReducer)
  .combine("local", localReducer)
  .combine("modals", modalsReducer)
  .combine("nav", navigationReducer)
  .combine("session", sessionReducer)
  .combine("sider", siderReducer);

export const rootReducer = rootReducerBuilder.build();
