import ReducerBuilder from "../../redux/utils/factories/ReducerBuilder";
import React from "react";
import { createRoomModalReducer } from "./reducers/createRoomModalReducer";

export const MODALS = {
  createRoomModal: "createRoomModal",
  updateProfile: "updateProfile",
};

//TODO make values dynamic
export const reducer = new ReducerBuilder()
  .setInitialState({})
  .combine(MODALS.createRoomModal, createRoomModalReducer)
  .combine(MODALS.updateProfile, createRoomModalReducer)
  .build();
