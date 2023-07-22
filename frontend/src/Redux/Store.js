import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production", // Disable DevTools in production
});

export default store;
