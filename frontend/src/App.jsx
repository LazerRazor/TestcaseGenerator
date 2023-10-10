import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Custom from "./pages/Custom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/custom",
        element: <Custom/>,
    }
]);

function App() {
  return (
    <>
        <Navbar/>
        <RouterProvider router={router} />
    </>
  )
}

export default App
