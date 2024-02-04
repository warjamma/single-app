import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    // add only sync reducer action from this slice file
  },
  extraReducers: (builder: ActionReducerMapBuilder<{}>) => {
    // add async or sync reducer action from other slice
  },
});

// config persist auth state
const persistConfig = {
  key: "auth",
  storage,
  whitelist: [],
};
export const authActions = slice.actions;
// reducer persist
export default persistReducer(persistConfig, slice.reducer);
