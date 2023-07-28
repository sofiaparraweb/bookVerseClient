// import { createStore, applyMiddleware, compose } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage';
// import thunk from "redux-thunk";
// import rootReducer from "./reducer";

// const persistConfig = {
//   key: 'root', // La clave bajo la cual se almacenará el estado persistente
//   storage, // Configura el almacenamiento a utilizar (en este caso, el almacenamiento local del navegador)
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
//   compose;

// const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export const persistor = persistStore(store); // Crea una instancia de persistor

// export default store;

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
  serializableCheck: {
    ignoredActions: ['register'], // Agrega aquí el nombre de la acción no serializable si es necesario
  },
}), thunk];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
