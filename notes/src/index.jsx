// Uncomment to enable why-did-you-render:
// import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMClient from "react-dom/client";
import * as MobxReact from "mobx-react-lite";
import * as ReactRedux from "react-redux";
import App from "./components/App";
import reduxStore from "./store/redux";
import mobxStore from "./store/mobx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          fontFamily: "inherit",
          color: "black",
          borderColor: "rgba(0, 0, 0, 0.23)",
          backgroundColor: "white",
          "&:hover": {
            borderColor: "rgba(0, 0, 0, 0.23)",
            backgroundColor: "#ffe866",
          },
          "&:active": {
            borderColor: "rgba(0, 0, 0, 0.23)",
            backgroundColor: "#ffdb01",
          },
        },
      },
    },
  },
});

const useReact18 = true;

const element = (
  <React.StrictMode>
    <ReactRedux.Provider store={reduxStore}>
      <MobxReact.Observer>
        {() => (
          <ThemeProvider theme={theme}>
            {!useReact18 && (
              <div className="react-17-warning">
                Workshop warning: running in the React 17 mode.
              </div>
            )}
            <App mobxStore={mobxStore} />
          </ThemeProvider>
        )}
      </MobxReact.Observer>
    </ReactRedux.Provider>
  </React.StrictMode>
);

if (useReact18) {
  ReactDOMClient.createRoot(document.getElementById("root")).render(element);
} else {
  ReactDOM.render(element, document.getElementById("root"));
}
