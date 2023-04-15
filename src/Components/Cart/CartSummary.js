import React from "react";
import './CartSummary.css'

/**
 * This component renders a cart summary for the input items.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const CartSummary = (props) => {

    let subtotal = 0

    props.items.map(item => {
        subtotal = subtotal + item.price
    })

    const total = subtotal + 2.99 // add shipping costs

    // don't return the summary if no items were added
    if (subtotal === 0) {

    } else {

        return (<div className={'cart-summary'}>
            <div className={'cart-summary-entry'}>
                <p>Zwischensumme:</p>
                <p>{subtotal}€</p>
            </div>
            <div className={'cart-summary-entry'}>
                <p>Lieferkosten:</p>
                <p>2,99€</p>
            </div>
            <div className={'cart-summary-entry'}>
                <p style={{fontWeight: 'bold'}}>Gesamt:</p>
                <p style={{fontWeight: 'bold'}}>{total}€</p>
            </div>
            {total >= 30 ? '' : <div className={'cart-summary-entry'}>
                <p>Kostenfreie Lieferung ab 30,00€</p>
            </div>}
            <button>Bezahlen ({total}€)</button>
        </div>)
    }
}

export default CartSummary