// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { createLogger } from 'redux-logger';

const logger = createLogger({ collapsed: true });

export const store = configureStore({
  reducer: rootReducer,
  // You store a Firebase User object in state, which is not serializable.
  // Disable the serializable check to avoid noisy warnings.
  middleware: (getDefaultMiddleware) => {
    const base = getDefaultMiddleware({ serializableCheck: false });
    return process.env.NODE_ENV !== 'production' ? base.concat(logger) : base;
  },
  devTools: process.env.NODE_ENV !== 'production',
});
