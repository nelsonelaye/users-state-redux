import React from "react";
import "./index.module.scss";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { delete_user } from "../../redux/reducer/slice";
import { RootState } from "../../redux/store";

const DisplayCards = () => {
  const users = useSelector((state: RootState) => state.rootReducer.users);
  const dispatch = useDispatch();
  return (
    <section>
      <h2>Available users</h2>

      <ul>
        {users?.map((user) => (
          <li key={user.name}>
            <h3>{user.name}</h3>
            <span style={{ fontSize: "20px" }}>
              <b>{user.age}</b>
            </span>
            <span>{user.bio}</span>
            <Button
              text="Delete user"
              onClick={() => {
                dispatch(delete_user(user.id));
                console.log("Something");
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DisplayCards;
