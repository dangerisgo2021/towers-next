import { get } from "lodash";
import { profileReceived, userReceived } from "state/redux/auth/actions";
import { apolloClient } from "services/apollo";
import { profileQuery } from "services/queries/profileQuery";

export const fetchProfileOnUserReceived = (store) => (next) => async (
  action
) => {
  next(action);

  if (action.type === userReceived.type) {
    const agentId = get(action, "payload.user.sub");
    const { data } = await apolloClient.query({
      query: profileQuery,
      variables: { agentId },
    });

    store.dispatch(profileReceived(data));
  }
};
