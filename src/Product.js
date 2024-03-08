import React from 'react'
import "./Product.css"
 
function Product({id, title , image ,price, rating}) {
  return (
    <div className='product'>
        <p>{title}</p>
        <p>{}</p>
       <p className='product__'>
        <small>₹</small>
        <strong>{price}</strong>
        {/* <div>{image}</div> */}
       </p>
       <div className='product__rating'>
        {
            Array(rating)
            .fill()
            .map((_)=>(
                <p >⭐</p>
                <

            ))
        }
       </div>
       <button>Add to basket</button>
    </div>
  )
}

export default Product
