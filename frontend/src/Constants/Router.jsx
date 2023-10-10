import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Custom from "../pages/Custom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/custom",
    element: <Custom />,
  },
]);

export default router;