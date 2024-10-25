import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ROUTES from "../routes";
import Layouts from "./pages/Layouts/Layouts";

import "./App.scss";
import { Edit, Error, Login, Todos } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.TODOS} element={<Layouts />}>
        <Route index element={<Todos />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.EDIT_TODO} element={<Edit />} />
        <Route path={ROUTES.ERROR} element={<Error />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
