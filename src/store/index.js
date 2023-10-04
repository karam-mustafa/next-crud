import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import coursesSlice from "./slices/courses.slice";

const reducers = {
  reducer: {
    courses: coursesSlice,
  },
};

const store = configureStore(reducers, applyMiddleware(reduxThunk));

export default store;
