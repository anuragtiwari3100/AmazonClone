import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
          <img 
          className="home_banner"
           src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Unrec_PC_Hero_2X_ENGLISH._CB416349557_.jpg" 
          alt="" />
        <div className="home_row">
            <Product
                 id="2"
                title="Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)  animal"
                price={1000}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71dujTTJDZL._SL1500_.jpg"
            />
            <Product
                 id="3"
                title="Dell Vostro 3401 14inch FHD AG 2 Side Narrow Border Display Laptop (10th gen i3-1005G1 / 4GB / 1TB / Integrated Graphics/ Win 10 + MS Office H&S 2019 / Black) D552124WIN9BE"
                price={1000}
                rating={4}
                image="https://m.media-amazon.com/images/I/8147cwFm2PL._AC_UY327_FMwebp_QL65_.jpg"
            />
        </div>

        <div className="home_row">
            <Product
                 id="4"
                title="
                OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
                price={30}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/616bhfyXimL._SL1500_.jpg"
            />
            <Product
                id="5"
                title="Cello Aspro Mavro Ball Pen Set (Bulk Pack of 50 Pens with Stand)"
                price={30}
                rating={4}
                image="https://m.media-amazon.com/images/I/71JtFbZl5oL._AC_UL480_FMwebp_QL65_.jpg"
            />
        </div>

        <div className="home_row">
        <Product
                 id="7"
                title="FURNATO Home Decor | UV Coated MDF Board Laminated of Mona Lisa Picture Painting Digital Reprint 12 inch x 18 inch Painting  (With Frame)"
                price={30}
                rating={4}
                image="https://rukminim2.flixcart.com/image/612/612/xif0q/painting/3/j/1/10-1-moli-er-enterprises-original-imagvjrjnuctgydv.jpeg?q=70"
            />
         </div>

         <div className="home_row">
         <Product
                 id="7"
                title="Cello Aspro Mavro Ball Pen Set (Bulk Pack of 50 Pens with Stand)"
                price={30}
                rating={4}
                image="https://m.media-amazon.com/images/I/71JtFbZl5oL._AC_UL480_FMwebp_QL65_.jpg"
            />
            <Product
                 id="7"
                title="Cello Aspro Mavro Ball Pen Set (Bulk Pack of 50 Pens with Stand)"
                price={30}
                rating={4}
                image="https://m.media-amazon.com/images/I/71JtFbZl5oL._AC_UL480_FMwebp_QL65_.jpg"
            />

      

            <Product
                id="5"
                title="Srimad Bhagavad Gita As It Is : HINDI-2018- New Edition (Hardcover, Hindi, A. C. Bhaktivedanta Swami Prabhupada,ISKCON)  (HARD BOUND, Hindi, His Divine Grace A. C. Bhaktivedanta Swami Prabhupada)"
                price={30}
                rating={4}
                image="https://rukminim2.flixcart.com/image/416/416/jyyqc280/regionalbooks/y/6/3/srimad-bhagavad-gita-as-it-is-hindi-2018-new-edition-hardcover-original-imaf79gzwhhey4zz.jpeg?q=70&crop=false"
            />
             <Product className="abhi"
                 id="10"
                title="The Ramayana is one of the two popular epics of India, the other being the Mahabharata"
                rating={4}
                price={300}
               
                image="https://rukminim2.flixcart.com/image/416/416/k6xxua80/book/5/6/7/ramayana-original-imafpab5ezyvmztc.jpeg?q=70&crop=false"
            />


        </div>
        </div>
    )
}

export default Home
