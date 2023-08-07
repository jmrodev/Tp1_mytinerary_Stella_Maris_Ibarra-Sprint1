import React from "react";
import SVG from "../../assets/Images/abstract-user-flat-3.svg";

export default function LogInDropDown({Login, setLogin}) {
  
  const handLeClick = () => {
    setLogin(!Login);
  }
  return (
    <div
      onClick={handLeClick}
      className="absolute right-0 flex flex-col gap-4 p-4 text-lg font-medium text-white bg-black border cursor-pointer sm-hidden top-10 "
    >
      <img src={SVG} alt="" className="w-4 h-4" />
    </div>
  );
}
