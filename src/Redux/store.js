import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import BookPersist from "./reducer";

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  LocalPersist: BookPersist,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [...getDefaultMiddleware({
  serializableCheck: false, // Permitir datos no serializables
}), thunk];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
