import { configureStore } from "@reduxjs/toolkit";
import TableReducer from "./Reducers/TableReducer.jsx";
export let store = configureStore({
  reducer: {
    TableReducer,
  }
});