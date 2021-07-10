import { get } from "lodash";

export const roomMatchSelector = (state) => get(state, "room.match");
