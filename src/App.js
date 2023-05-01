import './App.css';
import FoodList from "./Components/Food/FoodList";
import {v4 as uuidv4} from 'uuid';
import {useEffect, useState} from "react";
import FoodButton from "./Components/Food/FoodButton";
import Cart from "./Components/Cart/Cart";
import {useDispatch, useSelector} from 'react-redux';
import React, { useSubscribtion } from 'react'

function App(props) {

    /*
    const category = useSelector(state => {
        console.log(state.categoryReducer.type);
        return state.categoryReducer.type
    });

    */ 
    const [category, setCategory] = useState('beliebt');
    const categoryType = useSelector(state => state.categoryReducer.category);
    
    useEffect(() => {
    setCategory(categoryType);
    console.log(categoryType); //-> undefined
    });

    //const [category, setCategory] = useState("beliebt");

    //Datensatz mit Buttons
    const allbuttons = [// Für alle Parameter: "key": value, ...
        {"buttonName": "Beliebt", "categorie": "beliebt"}, {
            "buttonName": "Pizza",
            "categorie": "pizza"
        }, {"buttonName": "Pasta", "categorie": "pasta"}, {"buttonName": "Salate", "categorie": "salate"}]

    /*
   
    */

    const allCartItems = []

    const [cartItems, setCartItems] = useState(allCartItems);
    const onAddToCart = (item) => {

        setCartItems([...cartItems, item])
    }

    const titleCategory = () => {
        if (category == 'pizza') {
            return 'Pizza'
        } else if (category == 'pasta') {
            return 'Pasta'
        } else if (category == 'salate') {
            return 'Salate'
        }
        return 'Beliebt';
    }

    return (
        <div className="App">

            {/* Linke Seite zur Auswahl des Essens */}
            <div className="food-side">

                {/* Obere Hälfte der Seite: Bild und Menü */}
                <div className="upperhalf">

                    {/* Großes Bild */}
                    <div className="hero-image">
                        <img
                            src="https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_40:9,c_thumb,w_1020/f_auto/q_auto/dpr_2.0/v1679476682/static-takeaway-com/images/restaurants/de/O3NRRRN1/headers/header"
                            alt="Pizza"></img>
                    </div>

                    {/* Text unter Bild: Titel des Shops sowie Menü */}
                    <div className="hero-text">
                        {/* Titel des Shops sowie Info-Text*/}
                        <div className="menu-text">
                            <h1>Pizza + Pasta</h1>
                            <p>20-45 Minuten | 1,49€ Liefergebühren | Mindestbestellwert 25,00€ | Kostenlose Lieferung
                                ab 30,00€</p>
                        </div>
                        {/* Menü: Suche und Buttons für vers. Gerichte */}
                        <div className="menu-buttons">
                            <button className="search-button">
                                <img className="search-button-img" src="./images/search-icon.png" alt="Suche"></img>
                            </button>

                            {/* Alle Buttons*/}
                            {allbuttons.map((item, index) => {
                                // Übergibt Props an ToDos
                                return (<FoodButton
                                    buttonName={item.buttonName}
                                    foodCategorie={item.categorie}
                                    key={uuidv4()}
                                ></FoodButton>);
                            })}
                        </div>
                    </div>
                </div>

                {/* Untere Hälfte der linken Seite: Auswahl Gerichte*/}
                <div className="bottomhalf">
                    {/* Section Header */}
                    <div className="foodsection-header">
                        <h2>{titleCategory()}</h2>
                    </div>
                    {/* Liste der angezeigten Elemente: Hier Pizza */}
                    <FoodList category={category} onAddToCart={onAddToCart}/>
                </div>
            </div>

            {/* Rechte Seite für Warenkorb */}
            <Cart cartItems={cartItems}/>
        </div>
    );
}

export default App;
