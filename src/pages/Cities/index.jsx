import React from "react";

    import CarouselCities from "../../components/CarouselCities/Index";
    import {data} from "../../utlis/enums"
function Cities() {

 

  return (

    
    
  
   
    
      <CarouselCities
            href={data[0].href}
            text={data[0].text}
            title={data[0].title}
            
          />
    
  );
}
export default Cities;
