import { get } from "lodash";

export const getFormValues = (state) =>
  get(state, "createRoomModal.form.values");
