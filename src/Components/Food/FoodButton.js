import React, {useCallback} from 'react'
import './FoodButton.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory } from '../../Actions'

const FoodButton = ({buttonName, foodCategorie}) => {

    const dispatch = useDispatch();
    // Passes action function to store
    const changeCategory = () => {
        const newCategory = foodCategorie;
        return dispatch(updateCategory(newCategory));
    }

    return (
        <button className="food-buttons" onClick={changeCategory} value={foodCategorie}>
            {buttonName}
        </button>
    )
};

export default FoodButton


