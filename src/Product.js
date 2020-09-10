import React from 'react'
import "./Product.css"
function Product({ id,title, price, rating,image }) {
    return (
        <div className="product">
            <div className="product__info">
                <h2>{title}</h2>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=><p>⭐</p>)}
                </div>
            </div>
            <img src={image} />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
