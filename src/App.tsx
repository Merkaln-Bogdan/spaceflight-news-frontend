import { Routes, Route } from "react-router-dom";
import { routes } from "./data/routes";
import { HomePage } from "./pages/Home";
import { Details } from "./pages/Details";
import { createTheme, ThemeProvider } from "@mui/material";

function App(): React.ReactElement {
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />

        <Route path={routes.article} element={<Details />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
