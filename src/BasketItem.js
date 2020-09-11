import React from 'react'
import "./BasketItem.css"
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format';
function BasketItem({id,image,title,price,rating}) {


    const [{ basket }, dispatch]
        = useStateValue();

    const removeFromBasket = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
           id:id,
        })
    }

   

    return (
        <div className="basketItem">
            <img className="basket__image" src={image} alt="" />
            
            <div className="basket__right">
                <p className="basket__title">{title}</p>
                <CurrencyFormat

                    renderText={(value) => (
                        <>
                            <p>
                                <strong>{value}</strong>
                            </p>



                        </>
                    )}
                    decimalScale={2}
                    value={price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}

                />

                <div className="basket__rating">
                    {Array(rating).fill().map((_,i)=><p>🌟</p>)}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default BasketItem
