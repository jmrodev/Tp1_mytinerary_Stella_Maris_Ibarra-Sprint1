import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header/>
      <div style={{ minHeight: "calc(100vh - 120px)" }}>

        <Outlet />
        </div>
      <Footer/>
    </>
  );
}
