import { get } from "lodash";

export const getSession = (state) => get(state, "auth.session", {});
