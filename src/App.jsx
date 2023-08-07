import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./layouts/Layout";

import Home from "./pages/Home";
function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
