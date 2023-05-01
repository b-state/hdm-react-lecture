import React, {useEffect, useState} from "react";
import './Modal.css';

const Modal = ({open, food, closeModal, onAddToCart}) => {

    const [counter, setCounter] = useState(1);
    const [total, setTotal] = useState(food.price);

    // Bei Checkboxen Preis aktualisieren
    const checkBoxen = () => {
        if (!open) return null
        var checkbox1 = document.getElementById("extra1");
        checkbox1.addEventListener('change', () => {
            calculatePrice();
        });
        var checkbox2 = document.getElementById("extra2");
        checkbox2.addEventListener('change', () => {
            calculatePrice();
        });
        var checkbox3 = document.getElementById("extra3");
        checkbox3.addEventListener('change', () => {
            calculatePrice();
        });
    }

    // Preis ermitteln
    const calculatePrice = () => {
        if (!open) return null
        var foodprice = parseFloat(food.price);

        // Größenpreis berechnen
        if (document.getElementById("size").options[1].selected == true) {
            foodprice += 3.00;
        } else if (document.getElementById("size").options[2].selected == true) {
            foodprice += 6.00;
        } else if (document.getElementById("size").options[3].selected == true) {
            foodprice += 10.00;
        }
        // Extrapreis berechnen
        if (document.getElementById("extra1").checked == true) {
            foodprice += 1.20;
        }
        if (document.getElementById("extra2").checked == true) {
            foodprice += 0.50;
        }
        if (document.getElementById("extra3").checked == true) {
            foodprice += 0.70;
        }
        // Anzahl berechnen
        foodprice = (foodprice * counter).toFixed(2);
        foodprice = (Math.round(foodprice * 100) / 100)
        setTotal(foodprice);
        document.getElementsByClassName("modal-item-add-button")[0].innerHTML = foodprice + "€";
    };

    const addCart = () => {
        onAddToCart({"title": food.title, "price": total, "counter": counter})
        closeModal();
    }

    if (!open) return null

    return (

        <div className="overlay">
            <div className="flexed">
                <div className="modalContainer">
                    <div className="modal-item-title">
                        <h2> {food.title} </h2>
                        {/* Item Zutaten */}
                        <p className="modal-item-ing"> {food.ing} </p>
                        {/* Item Größenauswahl */}
                        <div>
                            <form className="modal-item-size">
                                <label for="size">Wähle eine Größe:</label>
                                <select name="size" id="size" onLoad={calculatePrice} onChange={calculatePrice}>
                                    <option value="medium">Medium, Ø 26cm</option>
                                    <option value="large">Large, Ø 32cm</option>
                                    <option value="x-large">X-Large, Ø 40cm</option>
                                    <option value="xx-large"> XX-Large, Ø 50cm</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="">
                    {/* Item Bild */}
                    <div className="modal-item-img">
                        <img src={food.img}></img>
                    </div>
                </div>
            </div>
            <form className="extras">
                <div><input type="checkbox" id="extra1" name="extra1" value="extraCheese" onChange={checkBoxen}/>
                    <label for="extra1">Extra Käse (+1,20€)</label></div>
                <div><input type="checkbox" id="extra2" name="extra2" value="extraHot" onChange={checkBoxen}/>
                    <label for="extra2">Extra scharf (+0,50€)</label></div>
                <div><input type="checkbox" id="extra3" name="extra3" value="extraPineapple" onChange={checkBoxen}/>
                    <label for="extra3">Mit Ananas (+0,70€)</label></div>
            </form>
            {/* Unterer Bereich */}
            <div className="modal-item-add">
                {/* Plus-Minus Zähler */}
                <div className="counter-div">
                    <button id="minus" onClick={countdown}>−</button>
                    <p>{counter}</p>
                    <button id="plus" onClick={countup}>+</button>
                </div>
                <button className="modal-item-add-button" onClick={addCart}> {food.price}€</button>
            </div>
            <p className="closeBtn" onClick={closeModal}>X</p>
        </div>)

    function countdown() {
        if (counter >= 2) {
            const count = counter - 1;
            setCounter(count);
        }
    }

    function countup() {
        const count = counter + 1;
        setCounter(count);
    }
}

export default Modal
