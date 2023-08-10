import CardComponent from "../../components/CardComponent/Index";
import Carousel  from "../../components/Carousel/Index";
import {data} from "../../utlis/enums"


console.log(data)
const Home = () => {

  return (
<>

  <CardComponent 
        href={data[0].href}
        text={data[0].text}
        title={data[0].title}
        
      />


      
      <div className="">
        <Carousel/>
      </div>
      
      </>
  )
  
  }
  export default Home