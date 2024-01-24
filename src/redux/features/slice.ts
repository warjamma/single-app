import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@redux/features/auth/slice";

const reducer = combineReducers({
  auth: authReducer,
});

export default reducer;
