import { combineReducers } from "@reduxjs/toolkit";
import certificates from "./certificates";

const RootReducer = combineReducers({certificates});

export default RootReducer;