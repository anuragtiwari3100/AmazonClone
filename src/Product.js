import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({id,title,price,rating,image}) {
    const [{basket},dispatch]=useStateValue();
    const addToBasket=()=>{
dispatch({
    type:"ADD_TO_BASKET",
    item:{
    id:id,
    title:title,
    price:price,
   
    rating:rating,
    image:image,
    }

})
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                <string><strong> <small>₹ </small></strong></string>

                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {  Array(rating).fill().map(()=>(<p className="starrating">⭐</p>))}
                </div>
            </div>

                <img src={image} alt=""/>
                <button  className="cursor-pointer"  onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
