import { store } from "../store";
import { PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../../App.types";
import { ADD_USER, DELETE_USER } from "../actions/actions";
import type { RootState } from "../store";

//This is just a Type we import from Redux.
import { Reducer } from "redux";

interface ADD {
  type: "ADD_USER"; //Define your action names
}

interface DELETE {
  type: "DELETE_USER"; //Define your action names
}

type PossibleActions = ADD | DELETE;
// // The actions could/should be defined in another file for clarity

type users = userType[];

const defaultState = 0;
const initialState = store.getState();

const rootReducer = (state = initialState, action: PayloadAction<userType>) => {
  switch (action.type) {
    case ADD_USER:
      return state;
      break;

    default:
      break;
  }
};

export default rootReducer;
