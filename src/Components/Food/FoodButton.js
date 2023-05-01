import React, {useCallback} from 'react'
import './FoodButton.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory } from '../../Actions'

const FoodButton = ({buttonName, foodCategorie}) => {

    const changeCategory = () => {
        // ToDo: Passes action function to store
    }

    return (
        <button className="food-buttons" onClick={changeCategory} value={foodCategorie}>
            {buttonName}
        </button>
    )
};

export default FoodButton


