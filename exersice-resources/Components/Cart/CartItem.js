import React from "react";
import {FiMinusCircle, FiPlusCircle} from "react-icons/fi";
import './CartItem.css'

/**
 * This component renders a single food item with name, count, price, size and annotations
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const CartItem = (props) => {

    const buttonSize = 25

    return (
        <div className={'cardItem'}>
            <h3 style={{paddingRight: 10, marginTop: 0}}>{props.data.counter}</h3>
            <div>
                <h3 style={{marginTop: 0, textDecoration: "underline"}}>{props.data.title}</h3>
                <div className={'annotation'}>
                    <a href={''}>Anmerkung hinzufügen</a>
                    <FiPlusCircle size={buttonSize}/>
                    <FiMinusCircle size={buttonSize}/>
                </div>
            </div>
        </div>
    )
}

export default CartItem