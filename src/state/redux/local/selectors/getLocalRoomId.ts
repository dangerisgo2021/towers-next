import { get } from "lodash";
export const getLocalRoomId = (state) => get(state, "local.roomId");
