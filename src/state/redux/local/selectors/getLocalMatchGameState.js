import { get } from "lodash";
export const getLocalMatch = (state) => get(state, "local.match");
