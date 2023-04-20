import { combineReducers } from "@reduxjs/toolkit";
import auth from './auth'

const rootReducers = combineReducers({
    auth,
});

export default rootReducers;