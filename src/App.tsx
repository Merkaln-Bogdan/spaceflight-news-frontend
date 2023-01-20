// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { Details } from "./pages/Details";
import { createTheme, ThemeProvider } from "@mui/material";

import { routes } from "./data/routes";

// import { useAppDispatch } from "redux/hooks";
// import { setAllArticles } from "redux/slices/article.slice";
// import { articlesDataService } from "service/service";

function App(): React.ReactElement {
  //Comments for implement FETCHING DATA IF WE USE REDUX

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   articlesDataService
  //     .getAllArticles()
  //     .then((res) => dispatch(setAllArticles(res.data)));
  // }, [dispatch]);

  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });

  // If you're seeing this comment, it means I didn't have time to optimize the code and fix styling issues because there's so much to do and so little electricity
  // I ask for some time to correct them

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
