import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import Cities from "./pages/Cities/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./pages/NotFound/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/cities/:id",
    element: <Layout />,
    children: [{ path: "/cities/:id", element: <Cities /> }],
  },
  {
    path: "/cities",
    element: <Layout />,
    children: [{ path: "/cities", element: <Cities /> }],
  },
  { path: "*", element: <Error404 /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
