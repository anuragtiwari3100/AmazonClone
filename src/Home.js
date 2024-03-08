import React from 'react'
import "./Home.css";
import Product from "./Product.js"
const Home = () => {
  return (
    <div className='home'> 
 < img 
  className ="home__image" src="https://s2-epocanegocios.glbimg.com/vDjG2ZTIcKvwM5hFZ_EyKBxUeqQ=/0x0:1200x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e536e40f1baf4c1a8bf1ed12d20577fd/internal_photos/bs/2023/i/r/5jlgRATXSTHzccAhzjJg/whatsapp-image-2023-06-07-at-15.36.01.jpeg"  alt="Image"/>
       {/* <img className='hero-section ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc2pbwuQLmjH-nEXCCgGPvWOXFtReb2Uxng&usqp=CAU"></img> */}
        <h1>I am the   home page</h1>





        {/*Product id,title,price, rating ,image*/}
       <Product
       id="1234"
       title="FUR JADEN 40L Weekender Travel Laptop Backpack with Anti Theft Pocket, Organizer, 15.6 Inch Padded Laptop Sleeve and Dual Handles"
       price="1,229"
       rating={5}
       image="https://m.media-amazon.com/images/I/41p7Iq8lLyL._AC_UL480_FMwebp_QL65_.jpg"
        
    
    

       />
        {/* product */}
        {/*  */}
        {/*  */}

    </div>
  )
}

export default Home
