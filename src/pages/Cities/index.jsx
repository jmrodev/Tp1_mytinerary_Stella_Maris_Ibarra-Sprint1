import React from "react";
import { useParams } from "react-router-dom";
 
function Cities() {

  let {id}= useParams();

  return (
    <div>
      <h2>El ID de La ciudad es </h2>


      <p>{id}</p>
      
    </div>
  );
}
export default Cities;
