import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const UserFetchUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchUser = createAsyncThunk("usersData", async () => {
  try {
    const response = await axios.get(UserFetchUrl);
    return response.data;
  } catch (e) {
    return e.message;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default userSlice.reducer;
