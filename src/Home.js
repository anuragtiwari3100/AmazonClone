import React from 'react'
import "./Home.css";
import Product from "./Product.js"
const Home = () => {
  return (
    <div className='home'> 
  <img 
  className ="home__image" src="https://s2-epocanegocios.glbimg.com/vDjG2ZTIcKvwM5hFZ_EyKBxUeqQ=/0x0:1200x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e536e40f1baf4c1a8bf1ed12d20577fd/internal_photos/bs/2023/i/r/5jlgRATXSTHzccAhzjJg/whatsapp-image-2023-06-07-at-15.36.01.jpeg"  alt="Image"/>
   
   <div className='home__row'>
   <Product
       id="1234"
       title="FUR JADEN 40L Weekender Travel Laptop Backpack with Anti Theft Pocket, Organizer, 15.6 Inch Padded Laptop Sleeve and Dual Handles"
       price="1,229"
       rating={5}
       image="https://m.media-amazon.com/images/I/41p7Iq8lLyL._AC_UL480_FMwebp_QL65_.jpg"
       /> 
       
   <Product
       id="12345"
       title="Majestic Man Cotton Checkered Half Sleeve Casual Shirt"
       price="1,229"
       rating={5}
       image="https://m.media-amazon.com/images/I/61xFDa-3UZL._SY879_.jpg"
       /> 
    <Product
       id="12345"
       title="True Indian 100% Women Woolen Cap for Winter, Beanie Cap, Woolen Cap for Women Winter wear, Knit Cap for Women, Winter hat for Women & Girl (Green)"
       price="1,229"
       rating={5}
       image="https://m.media-amazon.com/images/I/81fYfQYBn2L._AC_UL480_FMwebp_QL65_.jpg"
       /> 
      
   </div>
     

     <div className='home__row'>
     <Product
       id="1234"
       title="Zero to One: Notes on Startups, or How to Build the Future."
       price="1,229"
       rating={5}
       image="https://m.media-amazon.com/images/I/71uAI28kJuL._SY342_.jpg"
       /> 
   <Product
       id="12345"
       title="Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (D-Crush-16-23)"
       price="1,229"
       rating={5}
       image="https://m.media-amazon.com/images/I/61uBH8gIIIL._AC_UL480_FMwebp_QL65_.jpg"
       /> 
          <Product
       id="12345"
       title="I am OK You are OK: Assertive relationship creation (Psychology library) (Japanese Edition) Kindle Edition"
       price="1,229"
       rating={5}
       image="https://m.media-amazon.com/images/I/51yhp-6dUzL._SY425_.jpg"
       /> 
     </div>
     <div className='home__row'>
     <Product 
       id="12345"
    title="Oppo F25 Pro 5G (Lava Red, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
       price="1,229"
       rating={5}
       image="https://m.media-amazon.com/images/I/810HI-4wV+L._AC_UY327_FMwebp_QL65_.jpg"
       /> 
            <Product 
       id="12345"
    title="The Science of Getting Rich with The Science of Being Great"
       price="1,229"
       rating={5}
       image="https://m.media-amazon.com/images/I/81LzH2OsA-L._AC_UY327_FMwebp_QL65_.jpg"
       /> 
       
       <Product
       id="12345"
       title="Fastrack Analog Black Dial Men's Watch-3184NM02"
       price="1,229"
       rating={5}
       image="https://m.media-amazon.com/images/I/41TcOb68ZML._SY741_.jpg"
       /> 
     </div>
    </div>
  )
}
export default Home
