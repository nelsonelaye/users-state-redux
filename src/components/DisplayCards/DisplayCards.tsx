import React from "react";
import "./index.module.scss";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { delete_user } from "../../redux/reducer/slice";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

const DisplayCards = () => {
  const users = useSelector((state: RootState) => state.rootReducer.users);
  const dispatch = useDispatch();
  return (
    <section>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <span style={{ fontSize: "20px" }}>
              <b>{user.age}</b>
            </span>
            <span>{user.bio}</span>
            <br />
            <Link to={`/update/${user.id}`}>
              {" "}
              <Button text="Update user" />
            </Link>

            <br />
            <br />
            <Button
              text="Delete user"
              onClick={() => {
                dispatch(delete_user(user));
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DisplayCards;
