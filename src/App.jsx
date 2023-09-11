import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import Cities from "./pages/Cities/index";
import Details from "./components/Details/Index"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./pages/NotFound/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {path: "/", element: <Home />},
      {path: "/cities/:id",element: <Details/>},
      {path: "/api/cities",element: <Cities />},
      {path: "*",element: <Error404 />}
    ]
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
