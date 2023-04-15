import React from "react";
import './Cart.css'
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

/**
 * This component is used as the main cart component. It displays a message, if no food items have been added or displays the selected food items.
 * Additionally, it displays a price summary.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Cart = (props) => {
    return (
        <div className={'cart-full'}>
            <h2 style={{paddingBottom: 30, textAlign: "center"}}>Warenkorb</h2>

            {props.cartItems.map(item => {
                return (<CartItem data={item}></CartItem>);
            })}

            <CartSummary items={props.cartItems}/>
        </div>);

}

export default Cart