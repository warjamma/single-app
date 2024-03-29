import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import PagesReducer from '../../redux/pages/slice';
import FeaturesReducer from '../../redux/features/slice';

// root config persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

// root reducer
const reducer = combineReducers({
  pages: PagesReducer,
  features: FeaturesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

// root store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { persistor, store };
