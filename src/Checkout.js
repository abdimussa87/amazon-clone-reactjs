import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import BasketItem from './BasketItem'
import { useStateValue } from './StateProvider'
function Checkout() {

    const [{ basket }, dispatch] = useStateValue();
    const basketItemComponents = basket.map((item) => <BasketItem id={item.id}
        price={item.price}
        rating={item.rating}
        image={item.image}
        title={item.title}
    />);

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h4 className="checkout__title">Your shopping Basket</h4>
                    {basketItemComponents}
                </div>
            </div>
            <div className="checkout__right">

                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
