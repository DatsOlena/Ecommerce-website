// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { rootReducer } from './root-reducer';

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


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'] // user will not be persisted
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const persistor = persistStore(store)