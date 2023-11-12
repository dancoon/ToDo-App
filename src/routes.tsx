import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const routes = [{ path: "/", element: <Home /> }];
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((element, index) => (
          <Route key={index} path={element.path} element={element.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
