import { ADD_TODO } from "./constants";

let todoId = 0;

export const add_Todo = (task) => ({
  type: ADD_TODO,
  payload: {
    id: ++todoId,
    task,
  },
});
