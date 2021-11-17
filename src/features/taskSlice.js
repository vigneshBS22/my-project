import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filters: 'all',
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
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
    },
  },
});

export const { addTask, changeStatus, deleteTask, changeFilter, setTasks } =
  taskSlice.actions;

export const selectTask = (state) => state.tasks;

export default taskSlice.reducer;
