import React from 'react'
import './FoodItem.css'

const FoodItem = ({title, ing, size, price, img, index, showModal, showItem}) => {

    return (
        <li className="food-item">
            {/* Item Titel */}
            <div className="food-item-title">
                <h2> {title} </h2>
                {/* Item Zutaten */}
                <p className="food-item-ing"> {ing} </p>
                {/* Item Größen */}
                <p className="food-item-size"> {size} </p>
                {/* Item Preis */}
                <p className="food-item-price"> {price}€</p>
            </div>
            {/* Item Bild */}
            <div className="food-item-img">
                <img src={img}></img>
            </div>
            {/* Plus-Icon zum Hinzufügen */}
            <div className="add-item">
                <button className="add-item-button" onClick={() => {
                    showModal();
                    showItem(index)
                }}>
                    <img className="add-item-img" src="./images/add-icon.png" alt="Zum Warenkorb hinzufügen"></img>
                </button>
            </div>
        </li>
    )
};

export default FoodItem


