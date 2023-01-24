import "./index.module.scss";
import Button from "../Button";
import React, { useEffect, useState } from "react";
import { userType } from "../../App.types";
import { useSelector, useDispatch } from "react-redux";
import { add_user } from "../../redux/reducer/slice";
import { ADD_USER } from "../../redux/actions/actions";
import type { RootState } from "../../redux/store";
import { store } from "../../redux/store";
import rootReducer from "../../redux/reducer";

const InputForm = () => {
  // state.rootReducer in the code line below refers to the in the store reducer object or key/value pair, as the case may be
  // while the .users at the end refers to the application state value
  const users = useSelector((state: RootState) => state.rootReducer.users);
  const dispatch = useDispatch();

  const [data, setData] = useState<userType>({
    name: "",
    age: 0,
    bio: "",
  });

  return (
    <section>
      <h2 style={{ textAlign: "center" }}>Add New User</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(add_user(data));

          // dispatch(rootReducer());
        }}
      >
        <input
          type="text"
          placeholder="Name"
          onChange={({ target }) => {
            setData({ ...data, name: target.value });
          }}
          required
        />
        <input
          type="number"
          placeholder="Age"
          onChange={({ target }) => {
            setData({ ...data, age: parseInt(target.value) });
          }}
          required
        />
        <textarea
          placeholder="Bio"
          onChange={({ target }) => {
            setData({ ...data, bio: target.value });
          }}
          required
        />
        <Button text="create new user" />
      </form>
    </section>
  );
};

export default InputForm;
