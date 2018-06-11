import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { getPersistor } from "@rematch/persist";
import { ThemeProvider } from "styled-components";
import "react-placeholder/lib/reactPlaceholder.css";

import setupStore from "./core/store/setup";
import { theme } from "./core/constants";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const { store } = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={getPersistor()}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
