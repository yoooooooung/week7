// import { createStore } from "redux";
// // import { combineReducers } from "redux";
import slice from "../modules/slice";
import user from "../modules/userSlice"
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//   //리듀서 이름넣기
//   boardSlice: boardSlice,
// });

const store = configureStore({
  reducer: {
    slice: slice, user: user,
  },
});

// const store = createStore(rootReducer);
export default store;
