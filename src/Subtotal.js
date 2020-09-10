import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';

function Subtotal() {

    const[{basket},dispatch] = useStateValue();

    const numOfItems = basket.length;
    let totalPrice = 0;
     basket.forEach((item)=> totalPrice += item.price);

    return (
        <div className="subtotal">
            <CurrencyFormat

                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({numOfItems} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order contains a gift

                        </small>
                    </>
                )}
                decimalScale={2}
                value={totalPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
