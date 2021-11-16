import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlice";

let preloadedState;
const persistedTodosString = localStorage.getItem("tasks");

if (persistedTodosString) {
  preloadedState = {
    tasks: JSON.parse(persistedTodosString)
  };
}

export const store = configureStore({
  reducer: {
    tasks: taskReducer
  },
  preloadedState
});
