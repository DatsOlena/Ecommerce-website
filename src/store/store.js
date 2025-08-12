import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { rootReducer } from './root-reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(logger),
});

// Test dispatch to see if logger works
console.log('🏪 Store created, testing dispatch...');
store.dispatch({ type: 'TEST_ACTION', payload: 'Logger test' });

export { store };