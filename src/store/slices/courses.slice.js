import { createSlice } from "@reduxjs/toolkit";
import { get, getById } from "../actions/coursers.action";

const coursesReducer = createSlice({
  name: "courses",
  initialState: {
    data: [],
    courseById: {},
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(get.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.courseById = action.payload;
    });
  },
});

export default coursesReducer.reducer;
