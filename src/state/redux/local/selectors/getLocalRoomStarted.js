import { get } from "lodash";
export const getLocalRoomStarted = (state) => get(state, "local.started");
