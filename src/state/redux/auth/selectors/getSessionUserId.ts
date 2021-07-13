import { get } from "lodash";

export const getSessionUserId = (state) => get(state, "auth.session.userId");
