import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Cities from "./pages/cities";
import Details from "./pages/details"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {path: "/", element: <Home />},
    
    ]
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
