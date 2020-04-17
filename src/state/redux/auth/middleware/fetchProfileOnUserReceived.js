//import gql from "graphql-tag";
import { userReceived } from "../actions";
// import { apolloClient } from "../../../../../apollo/apollo";
//
// const getProfileByAgentIdQuery = gql`
//   query getProfileByAgentId {
//     listProfiles(
//       limit: 1
//       filter: { agentId: { eq: "xKKCxAGDlBh8vXURQBuZErAl9IsNuqmX" } }
//     ) {
//       items {
//         id
//         agentId
//         username
//       }
//     }
//   }
// `;
export const fetchProfileOnUserReceived = () => (next) => (action) => {
  next(action);

  if (action.type === userReceived.type) {
   
    /*
     console.log({ action, apolloClient });
    apolloClient.query({ query: getProfileByAgentIdQuery });
    
    if no profile found create new profile based on user.sub
    
     */
  }
};
