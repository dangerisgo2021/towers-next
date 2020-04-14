import ReducerBuilder from "../utils/factories/ReducerBuilder";
import React from "react";

//TODO make values dynamic
export const reducer = new ReducerBuilder()
  .setInitialState({
    siderNavItems: {
      home: { href: "/", displayText: "Home", id: "home" },
      lobby: { href: "/lobby", displayText: "Lobby", id: "lobby" },
      profile: { href: "/profile", displayText: "Profile", id: "profile" },
      rules: { href: "/rules", displayText: "Rules", id: "rules" },
      games: { href: "/games", displayText: "My Games", id: "games" },
    },
  })
  .build();
