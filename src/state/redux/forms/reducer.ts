import ReducerBuilder from "state/redux/utils/factories/ReducerBuilder";
import { formValueChanged } from "state/redux/forms/actions";
import { getForm } from "./selectors/getForm";

export const reducer = new ReducerBuilder()
  .setInitialState({})
  .addReducer(formValueChanged.type, (state, action) => {
    const { form, values } = action.payload;
    const formState = getForm(state, { form }) || {};

    return {
      ...state,
      [form]: {
        ...formState,
        values: {
          ...formState.values,
          ...values,
        },
      },
    };
  })
  .addReducer(formValueChanged.type, (state, action) => {
    const { form, values } = action.payload;
    const formState = getForm(state, { form }) || {};

    return {
      ...state,
      [form]: {
        ...formState,
        values,
      },
    };
  })
  .build();

export const formReducer = ({ initialValue, formName }) =>
  new ReducerBuilder()
    .setInitialState(initialValue)
    .addReducer(formValueChanged.type, (state, action) => {
      const { form, values } = action.payload;

      if (formName !== form) return state;
      console.log({ state, values });
      return {
        ...state,
        values: {
          ...state.values,
          ...values,
        },
      };
    })
    .build();
