import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "@redux/pages/home/slice";

const reducer = combineReducers({
  home: homeReducer,
});

export default reducer;
