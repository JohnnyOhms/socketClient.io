import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Main from "./component/main/Main";
import AppNavBar from "./component/AppBar/AppBar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A2027",
    },
    // mode: "dark",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppNavBar />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
