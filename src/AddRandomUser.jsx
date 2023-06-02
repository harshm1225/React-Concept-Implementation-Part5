import { fakeUserData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, removeAllUsers } from "./store/slices/UserSlice";

import "./AddRandomUser.css";

const AddRandomUser = () => {
  const dispatch = new useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
  const addRandomUser = (payload) => {
    dispatch(addUser(payload));
  };
  const deleteUser = (payload) => {
    dispatch(removeUser(payload));
  };
  const deleteAllUsers = () => {
    dispatch(removeAllUsers());
  };

  return (
    <>
      <div className="btn-container">
        <button
          className="button"
          onClick={() => {
            addRandomUser(fakeUserData());
          }}
        >
          Add Random User
        </button>
        <button className="button" onClick={deleteAllUsers}>
          Delete All Random Users
        </button>
      </div>
      <ul>
        {data.map((user, index) => {
          return (
            <div className="container" key={index}>
              <li>
                <span>{user}</span>
                <button
                  onClick={() => {
                    deleteUser(index);
                  }}
                >
                  Delete
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default AddRandomUser;
