import { Routes, Route } from "react-router-dom";
import { routes } from "./data/routes";
import { HomePage } from "./pages/Home";
import { Details } from "./pages/Details";
function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />

      <Route path={routes.article} element={<Details />} />
    </Routes>
  );
}

export default App;
