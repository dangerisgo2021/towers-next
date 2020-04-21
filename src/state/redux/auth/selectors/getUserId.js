import { get } from "lodash";

export const getAgentId = (state) => get(state, "auth.user.sub")