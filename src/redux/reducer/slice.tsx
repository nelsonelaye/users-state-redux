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
      state.users.push({ ...action?.payload, id: state.users.length + 1 });
      console.log({ ...action?.payload, id: state.users.length + 1 });
    },

    update_user(state = initialState, action: PayloadAction<userType>) {
      let indexofOldData = state.users.findIndex(
        (user: userType) => user.id == action.payload.id
      );
      state.users.splice(indexofOldData, 1, action.payload);
    },

    delete_user(state = initialState, action: PayloadAction<userType>) {
      //   const userIndex = state.users.indexOf(action.payload);
      //   console.log(action);
      state.users = state.users.filter(
        (user: userType) => user.id !== action.payload.id
      );
      //   return state;
    },
  },
});

export const { add_user, update_user, delete_user } = appSlice.actions;

export default appSlice.reducer;
