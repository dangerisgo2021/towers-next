import ReducerBuilder from "state/redux/utils/factories/ReducerBuilder";
import { setKeyToValue } from "state/redux/utils/reducers/setKeyToValue";
import { collapseSider, expandSider, siderBreak } from "./actions";

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
  .addReducer(siderBreak.type, (state, { payload }) => ({
    ...state,
    locked: !payload,
    collapsed: payload,
  }))
  .build();
