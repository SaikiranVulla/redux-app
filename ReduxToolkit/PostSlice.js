import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

let postID = 3;

const post_Url = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  try {
    const response = await axios.get(post_Url);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const addFetchPosts = createAsyncThunk("addPosts", async (payload) => {
  try {
    const response = await axios.post(post_Url, payload);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const initialState = {
  data: [],
  status: "idle", // idle | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    addPosts: {
      reducer(state, action) {
        state.data.unshift(action.payload);
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
      const existingPost = state.data.find((item) => item.id == postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        let min = 1;
        const loadingPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });
        state.data = state.data.concat(loadingPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addFetchPosts.fulfilled, (state, action) => {
        action.payload.date = new Date().toISOString();
        action.payload.authorName = action.payload.authorName;
        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        state.data.unshift(action.payload);
      });
  },
});

export const getAllPosts = (state) => state.posts.data;
export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;

export const { addPosts, reactionsAdded } = postSlice.actions;
export default postSlice.reducer;
