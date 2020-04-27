import { get } from "lodash";

export const getProfile = (state) => get(state, "auth.profile");
