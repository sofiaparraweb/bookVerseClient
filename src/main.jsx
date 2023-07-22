import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import {store, persistor} from '../src/Redux/store.js'
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <PersistGate persistor = {persistor}>
          <Auth0Provider
            domain={import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID}
            authorizationParams={{
              redirect_uri: window.location.origin 
            }}
            >
            <App />
          </Auth0Provider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  )
