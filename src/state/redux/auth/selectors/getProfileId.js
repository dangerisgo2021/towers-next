import { get } from "lodash";

export const getProfileId = (state) => get(state, "auth.profile.id")