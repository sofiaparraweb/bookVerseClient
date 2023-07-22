import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const persistConfig = {
  key: 'root', // La clave bajo la cual se almacenará el estado persistente
  storage, // Configura el almacenamiento a utilizar (en este caso, el almacenamiento local del navegador)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store); // Crea una instancia de persistor

export default store;
