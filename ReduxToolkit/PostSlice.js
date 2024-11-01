import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

let postID = 3;

const initialState = [
  {
    id: "1",
    title: "Daily Routine",
    content: "Good For a Body ",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Eat Health",
    content: "For Good Health ",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    addPosts: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(title, content, authorName) {
        return {
          payload: {
            id: postID++,
            title,
            content,
            date: new Date().toISOString(),
            authorName,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionsAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((item) => item.id == postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const { addPosts, reactionsAdded } = postSlice.actions;
export default postSlice.reducer;
