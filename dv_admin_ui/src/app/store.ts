import { configureStore } from '@reduxjs/toolkit';
import {logger} from 'redux-logger';
import storage from "redux-persist/lib/storage";
import persistReducer from 'redux-persist/es/persistReducer';
import rootReducers from 'src/redux/reducers';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: [logger],
  }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch