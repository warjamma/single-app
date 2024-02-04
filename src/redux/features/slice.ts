import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slice";

const reducer = combineReducers({
  auth: authReducer,
});

export default reducer;
