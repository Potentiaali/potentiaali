import React from "react"
import * as ReactDOMClient from "react-dom/client"
import "./reset.scss"
import "./index.scss"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import { store } from "./store"
import { I18nextProvider } from "react-i18next"
import i18n from "./i18n"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
const container = document.getElementById("root")

const root = ReactDOMClient.createRoot(container)

root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
)

// Service worker is disabled for now.
serviceWorker.unregister()
