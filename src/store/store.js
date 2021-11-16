import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlice";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

let store = configureStore({reducer: { tasks: persistedReducer}})
let persistor = persistStore(store)

export {store,persistor}

