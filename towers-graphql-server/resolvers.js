const { publish, subscribe } = require("./PubSub");

const messages = []
exports.resolvers = {
  Mutation: {
    addMessage(parent, { message }) {
      let entry = JSON.stringify({ id: messages.length, message });
      messages.push(entry);
      publish("newMessage", { entry });
      return messages;
    },
  },
  Query: {
    hello: () => "world",
    messages() {
      return messages;
    },
  },
  Subscription: {
    newMessage: {
      resolve: message => {
        return message.entry;
      },
      subscribe: () => subscribe("newMessage")
    },
  },
};