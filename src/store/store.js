// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
 
import { rootReducer } from './root-reducer';

const logger = createLogger({ collapsed: true });

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'] // user will not be persisted
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const base = getDefaultMiddleware({ serializableCheck: false });
    return process.env.NODE_ENV !== 'production' ? base.concat(logger, thunk) : base;
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store)
