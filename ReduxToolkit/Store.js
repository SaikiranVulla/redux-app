import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodosSlice";
import PostSlice from "./PostSlice";
import UserSlice from "./UserSlice";

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
    posts: PostSlice,
    user: UserSlice,
  },
});
