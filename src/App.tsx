import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes";
import { Provider } from "react-redux";
import { store } from "./store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff5000",
    },
  },
});

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
