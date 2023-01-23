import { store } from "../store";
import { PayloadAction } from "@reduxjs/toolkit";
import { stateType, userType } from "../../App.types";
import { ADD_USER, DELETE_USER } from "../actions/actions";
import type { RootState } from "../store";

//This is just a Type we import from Redux.
import { Reducer } from "redux";
import { useStore } from "react-redux";

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
// const initialState = store.getState();

const initialState: stateType = {
  users: [],
};

const rootReducer = (state = initialState, action: PayloadAction<userType>) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case DELETE_USER:
      const newState = state.users.filter(
        (user: userType) => user.id !== action.payload.id
      );
      return { ...state, users: newState };
    default:
      return state;
  }
};

export default rootReducer;
