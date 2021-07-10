import ReducerBuilder from "state/redux/utils/factories/ReducerBuilder";
import { v1 as uuidv1 } from "uuid";

export const reducer = new ReducerBuilder()
  .setInitialState({
    id: uuidv1(),
  })
  .build();
