import get from "lodash.get";

export const getFormValues = (state) =>
  get(state, "createRoomModal.form.values");
