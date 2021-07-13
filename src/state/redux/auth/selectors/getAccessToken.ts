import { get } from "lodash";

export const getAccessToken = (state) => get(state, "auth.session.accessToken");
