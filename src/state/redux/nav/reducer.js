import ReducerBuilder from "../utils/factories/ReducerBuilder";
import React from "react";

//TODO make values dynamic
export const reducer = new ReducerBuilder()
  .setInitialState({
    siderNavItems: {
      home: { href: "/", displayText: "Home", id: "home" },
      local: { href: "/local", displayText: "Local", id: "local" },
      profile: { href: "/profile", displayText: "Profile", id: "profile" },
      rules: { href: "/rules", displayText: "Rules", id: "rules" },
    },
  })
  .build();
