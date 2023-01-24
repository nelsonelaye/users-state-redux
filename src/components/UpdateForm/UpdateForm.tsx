import "./index.module.scss";
import Button from "../Button";
import React, { useEffect, useState } from "react";
import { userType } from "../../App.types";
import { useSelector, useDispatch } from "react-redux";
import { update_user } from "../../redux/reducer/slice";
import { ADD_USER } from "../../redux/actions/actions";
import type { RootState } from "../../redux/store";
import { store } from "../../redux/store";
import rootReducer from "../../redux/reducer";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.rootReducer.users);

  const [data, setData] = useState<userType>({
    name: "",
    age: undefined,
    bio: "",
  });

  useEffect(() => {
    const find_update = users.find((user: userType) => user.id == id);
    if (find_update) {
      setData(find_update);
    }
  }, []);

  return (
    <section>
      <h2 style={{ textAlign: "center" }}>Update User</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(update_user(data));
          navigate("/");
        }}
      >
        <input
          type="text"
          placeholder="Name"
          defaultValue={data.name}
          onChange={({ target }) => {
            setData({ ...data, name: target.value });
          }}
          required
        />
        <input
          type="number"
          placeholder="Age"
          defaultValue={data.age}
          onChange={({ target }) => {
            setData({ ...data, age: parseInt(target.value) });
          }}
          required
        />
        <textarea
          placeholder="Bio"
          defaultValue={data.bio}
          onChange={({ target }) => {
            setData({ ...data, bio: target.value });
          }}
          required
        />

        <Button text="Update user" />
      </form>
    </section>
  );
};

export default UpdateForm;
