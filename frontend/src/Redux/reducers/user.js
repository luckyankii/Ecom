import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, actions) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.user = actions.payload;
  },
  LoadUserFail: (state, actions) => {
    state.loading = false;
    state.error = actions.payload;
    state.isAuthenticated = false;
  },
  clearErrors: (state) => {
    state.error = false;
  },
});

/* 
 In JavaScript, if a property is accessed before it is defined, its value will be undefined.
 In the given code, when the LoadUserRequest action is dispatched, the loading property is accessed and set to true using state.loading = true. Since the loading property was not defined in the initial state, it will be dynamically created in the state object with the value undefined, and then it will be set to true when the action is dispatched.


*/
