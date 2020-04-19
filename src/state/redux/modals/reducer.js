import ReducerBuilder from "../../redux/utils/factories/ReducerBuilder";
import React from "react";
import { modalCanceled, modalClosed, modalOpened } from "./actions";
import { setShow } from "./reducers/setShow";

export const MODALS = {
  createRoomModal: "createRoomModal",
  updateProfile: "updateProfile",
};

//TODO make values dynamic
export const reducer = new ReducerBuilder()
  .setInitialState({})
  .addReducer(modalOpened.type, setShow(true))
  .addReducer(modalCanceled.type, setShow(false))
  .addReducer(modalClosed.type, setShow(false))
  .build();
