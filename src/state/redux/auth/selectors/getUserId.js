import get from "lodash.get"

export const getAgentId = (state) => get(state, "auth.user.sub")