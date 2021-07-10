import { publishActionMutation } from "eventStore/mutations/publishActionMutation";

const mapActionToActionInput = (action) => ({
  id: action.id,
  traceId: action.traceId,
  type: action.type,
  domain: action.domain,
  created: action.created,
  command: action.command,
  payload: JSON.stringify(action.payload),
});

export const publishActionService = async ({ action }) => {
  const graphqlClient = await import(
    "services/gateway/graphql/initGraphqlClient"
  ).then(({ initGraphqlClient }) => initGraphqlClient());

  console.log("RECEIVED_ACTION", JSON.stringify({ action }));

  console.log("START_PUBLISHING_ACTION", action.id);
  await graphqlClient.mutate({
    mutation: publishActionMutation,
    variables: {
      input: {
        action: mapActionToActionInput(action),
      },
    },
  });
  console.log("SUCCESS_PUBLISHING_ACTION", action.id);
};
