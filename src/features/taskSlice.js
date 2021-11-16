import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filters: 'all',
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    changeStatus: (state, action) => {
      const indexfound = state.tasks.findIndex(
        (task1) => task1.id === action.payload.id
      );
      state.tasks[indexfound].status = !state.tasks[indexfound].status;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    changeFilter: (state, action) => {
      state.filters = action.payload;
      console.log(action.payload);
    },
  },
});

export const { addTask, changeStatus, deleteTask, changeFilter } =
  taskSlice.actions;

export const selectTask = (state) => state.tasks;

export default taskSlice.reducer;
