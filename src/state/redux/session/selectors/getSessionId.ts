import { get } from "lodash";

export const getSessionId = (state) => get(state, "session.id");
