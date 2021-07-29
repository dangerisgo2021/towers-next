import { modalOk, modalClosed } from "state/redux/modals/actions";
import { NAME } from "state/redux/createRoomModal/consts";
import { apolloClient } from "services/gateway/graphql/initGraphqlClient";
import { createRoomMutation } from "services/mutations/createRoomMutation";
import { getFormValues } from "state/redux/createRoomModal/selectors/getFormValues";

export const submitCreateRoomForm = (store) => (next) => (action) => {
  next(action);
  if (action.type === modalOk.type) {
    const { modal } = action.payload;

    if (modal === NAME) {
      const state = store.getState();
      const { name, mode } = getFormValues(state);
      console.log({ apolloClient });

      apolloClient
        .mutate({ mutation: createRoomMutation, variables: { name, mode } })
        .then(({ data }) => {
          console.log({ data });
          store.dispatch(modalClosed({ modal: NAME }));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
};
