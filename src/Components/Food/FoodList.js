import React, {useState} from 'react'
import FoodItem from './FoodItem'
import {v4 as uuidv4} from 'uuid';
import Modal from "../Modal";
import {fetchFood} from "../../utils/foodAPI";
const FoodList = (props) => {

    //Datensatz mit allen Gerichten
    let allfood = fetchFood()

    const selectedFood = props.category
    // UseState Hook zum Öffnen und schließen des Modals
    const [openModal, setOpenModal] = useState(false);
    const [clickedItem, setClickedItem] = useState();

    // Setzt State mit geklicktem Gerichts, um an Modal zu übergeben
    const setItem = (index) => {
        setClickedItem(allfood[selectedFood][index]);
    };

    const changeModalState = () => {
        if (openModal) {
            setOpenModal(false);
        } else {
            setOpenModal(true);
        }
    };

    const onAddToCart = (item) => {
        props.onAddToCart(item)
    }

    return (

        <div className="food-list">
            <ul>
                {/* Modal */}
                {clickedItem ?
                    <Modal
                        open={openModal}
                        food={clickedItem}
                        closeModal={() => setOpenModal(false)}
                        onAddToCart={onAddToCart}/> : ''}

                {/* Alle Food Items */}
                {allfood[selectedFood].map((item, index) => {
                    // Übergibt Props an ToDos
                    return (<FoodItem
                        title={item.title}
                        ing={item.ing}
                        size={item.size}
                        price={item.price}
                        img={item.img}
                        index={index}
                        key={uuidv4()}
                        showModal={changeModalState}
                        showItem={setItem}
                    ></FoodItem>);
                })}
            </ul>
        </div>)
};

export default FoodList



