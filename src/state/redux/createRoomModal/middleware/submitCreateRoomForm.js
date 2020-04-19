import { modalOk, modalClosed } from "../../modals/actions";
import { NAME } from "../consts";
import { apolloClient } from "../../../../services/apollo";
import { createRoom } from "../../../../services/mutations/createRoom";
import {getFormValues} from "../selectors/getFormValues";


export const submitCreateRoomForm = (store) => (next) => (action) => {
  next(action);
  if (action.type === modalOk.type) {
    const { modal } = action.payload;

    if (modal === NAME) {
      const state = store.getState();
      const { name, mode } = getFormValues(state, { form: NAME });

      apolloClient
        .mutate({ mutation: createRoom, variables: { name, mode } })
        .then(({ data }) => {
          console.log({ data });
          store.dispatch(modalClosed({ modal: NAME }));
        });
    }
  }
};
