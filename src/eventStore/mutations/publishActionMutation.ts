import { gql } from "@apollo/client";

export const publishActionMutation = gql`
    mutation publishActionMutation($input: PublishActionInput) {
        eventStore {
            publishAction(input: $input)
        }
    }
`;
