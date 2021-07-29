import ReducerBuilder from "state/redux/utils/factories/ReducerBuilder";

//TODO make values dynamic
export const reducer = new ReducerBuilder()
  .setInitialState({
    siderNavItems: {
      home: { href: "/", displayText: "Home", id: "home" },
      local: { href: "/local", displayText: "Pass & Play", id: "local" },
      profile: { href: "/profile", displayText: "Profile", id: "profile" },
      rules: { href: "/rules", displayText: "Rules", id: "rules" },
      games: { href: "/games", displayText: "My Games", id: "games", requireAuthentication: true },
    },
  })
  .build();
