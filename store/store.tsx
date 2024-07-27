// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterSlice from '../slice/CounterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterSlice);

export const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
});

export const persistor = persistStore(store);