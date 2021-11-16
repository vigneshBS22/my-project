import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: []
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    changeStatus: (state, action) => {
      const indexfound = state.tasks.findIndex(
        (task1) => task1.id === action.payload.id
      );
      state.tasks[indexfound].status === false
        ? (state.tasks[indexfound].status = true)
        : (state.tasks[indexfound].status = false);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      localStorage.setItem("tasks", JSON.stringify(state));
    }
  }
});

export const { addTask, changeStatus, deleteTask } = taskSlice.actions;

export const selectTask = (state) => state.tasks;

export default taskSlice.reducer;
