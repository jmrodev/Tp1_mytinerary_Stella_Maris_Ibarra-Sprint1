import React, { useState } from "react";
import Tucuman from "../assets/Images/Tucuman.jpg";
import Nav from "../components/ Nav/Index";
import { LINKSHOME ,LINKSLOG} from "../utlis/enums";
import LogInDropDown from "../components/LogInDropDown.jsx/Index";

function Layout({ children }) {
  const [menu, setMenu] = React.useState(false);
  const [login,setLogin] = useState(false)

  return (
    <div className="container h-[vh100] bg-black">
      <header className="flex items-center justify-between w-100 h-100">
        <div className="flex items-center overflow-hidden h-1/2">
          <img src={Tucuman} alt="" className="w-32" />

          <h1 className="hidden sm-block text-4xl translate-y-2 text-white uppercase-translate-x-8 font-[bebas-new]">
            My Tinerary
          </h1>

          <Nav
            className="hidden gap-3 text-lg font-medium text-white sm:flex"
            Links={LINKSHOME}
          />

          {menu && (
            <Nav
              className="absolute flex flex-col gap-4 p-4 text-lg font-medium text-white bg-black border right-32 sm-hidden top-24 border-r-slate-700"
              Links={LINKSHOME}
            />
          )}
        </div>
        <button
          onClick={() => setMenu((prev) => !prev)}
          className="absolute flex flex-col gap-4 text-lg font-medium text-black -translate-x-20 cursor-pointer sm-hidden right-2 top-2"
        >
          {!menu ? "🌐" : "❌"}
        </button>
        <LogInDropDown setLogin={setLogin} Login={login} />

        
        {login && (
            <Nav
              className="absolute right-0 flex flex-col gap-4 p-4 text-lg font-medium text-white bg-black border sm-hidden top-24"
              Links={LINKSLOG}
            />
          )}
      </header>
    </div>
  );
}
export default Layout;
