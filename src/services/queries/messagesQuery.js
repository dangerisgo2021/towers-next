import { gql } from "@apollo/client";

export const messagesQuery = gql`
  query messagesQuery {
    messages {
      text
    }
  }
`
