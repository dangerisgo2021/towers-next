import ReducerBuilder from "../utils/factories/ReducerBuilder";
import { setKeyToValue } from "../utils/reducers/setKeyToValue";
import { setKeyToPayload } from "../utils/reducers/setKeyToPayload";
import { collapseSider, expandSider, sliderBreak } from "./actions";

export const reducer = new ReducerBuilder()
  .setInitialState({
    collapsed: false,
    locked: false,
  })
  .addReducer(
    collapseSider.type,
    setKeyToValue({ key: "collapsed", value: true })
  )
  .addReducer(
    expandSider.type,
    setKeyToValue({ key: "collapsed", value: false })
  )
  .addReducer(sliderBreak.type, (state, { payload }) => ({
    ...state,
    locked: !payload,
    collapsed: payload,
  }))
  .build();
