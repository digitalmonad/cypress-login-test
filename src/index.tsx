import { App } from "./views/App";
import { GlobalStyle } from "./themes/globalStyles";
import { Grommet } from "grommet";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./themes/defaultTheme";

ReactDOM.render(
  <React.StrictMode>
    <Grommet {...{ theme }} full>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);
