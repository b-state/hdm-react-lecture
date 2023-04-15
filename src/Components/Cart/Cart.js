import React from "react";
import './Cart.css'
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import {HiOutlineShoppingBag} from "react-icons/hi";

/**
 * This component is used as the main cart component. It displays a message, if no food items have been added or displays the selected food items.
 * Additionally, it displays a price summary.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Cart = (props) => {

    // Display a message if no food items have been added
    if (props.cartItems.length === 0) {
        return (<div className={`cart`}>
            <h2 style={{paddingBottom: 30}}>Warenkorb</h2>
            <HiOutlineShoppingBag size={30}/>
            <h2>Fülle deinen Warenkorb</h2>
            <p>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
        </div>)
    } else {
        return (
            <div className={'cart-full'}>
                <h2 style={{paddingBottom: 30, textAlign: "center"}}>Warenkorb</h2>

                {props.cartItems.map(item => {
                    return (<CartItem data={item}></CartItem>);
                })}

                <CartSummary items={props.cartItems}/>
            </div>)
    }
    ;

}

export default Cart