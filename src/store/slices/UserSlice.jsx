import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    removeAllUsers(state, action) {
      if (state.length > 0) state.splice(0, state.length);
    },
  },
});
export const { addUser, removeAllUsers, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
