import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs } from '@firebase/firestore';

export const getTasksAsync = createAsyncThunk(
  'tasks/getTasks',
  async (tasksCollectionRef) => {
    const data = await getDocs(tasksCollectionRef);
    let tasks = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return tasks;
  }
);

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
    },
  },
  extraReducers: {
    [getTasksAsync.fulfilled]: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, changeStatus, deleteTask, changeFilter, setTasks } =
  taskSlice.actions;

export const selectTask = (state) => state.tasks;

export default taskSlice.reducer;
