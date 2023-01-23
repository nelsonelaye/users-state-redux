import { createSlice } from "@reduxjs/toolkit";
import { userType, stateType } from "../../App.types";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: stateType = {
  users: [],
};

export const appSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add_user(state = initialState, action: PayloadAction<userType>) {
      state.users.push(action?.payload);
      //   console.log(state.users);
    },

    delete_user(state = initialState, action: PayloadAction<number>) {
      //   const userIndex = state.users.indexOf(action.payload);
      //   console.log(action);
      state.users = state.users.filter(
        (user: userType) => user.id !== action.payload
      );
      //   return state;
    },
  },
});

export const { add_user, delete_user } = appSlice.actions;

export default appSlice.reducer;
