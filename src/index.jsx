import * as ReactDOMClient from "react-dom/client";
import "./reset.scss";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
const container = document.getElementById("root");

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; 
import "dayjs/locale/fi"; 

dayjs.extend(relativeTime);

const root = ReactDOMClient.createRoot(container);

root.render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>,
);

// Service worker is disabled for now.
serviceWorker.unregister();
