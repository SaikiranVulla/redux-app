import { createSlice } from "@reduxjs/toolkit";
var id = 0;
const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoAdd(state, action) {
      state.push({
        id: ++id,
        text: action.payload.text,
        completed: false,
      });
    },
    todoDelete(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: true,
      });
    },
  },
});

export const { todoAdd, todoDelete } = todosSlice.actions;
export default todosSlice.reducer;
