import React from 'react'
import CardComponent from '../CardComponent/Index'
import { data } from '../../utlis/enums'
import Carousel  from '../Carousel/Index'



 function Index() {
    return (
        <>
            {/* <main className='flex'>
                {data.map((city, index) => {
                   return <CardComponent className='g-5' key={index} href={city.href} text={city.text} title={city.title}
                  />
                })}
           </main> */}
            <Carousel/>
        </>

    )
}
export default Index