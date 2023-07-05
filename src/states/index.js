import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import threadsReducer from "./threads/reducer";
import usersReducer from "./users/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import isPreloadReducer from "./isPreload/reducer";
import authUserReducer from "./authUser/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    // isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
