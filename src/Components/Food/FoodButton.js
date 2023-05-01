import React, {useCallback} from 'react'
import './FoodButton.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory } from '../../Actions'

const FoodButton = ({buttonName, foodCategorie}) => {

    const dispatch = useDispatch();
    const category = useSelector(state => state.categoryReducer.type);


    const changeCategory = () => {
        // hier fehlt noch change der category je nach button
        const newCategory = foodCategorie;
        console.log(dispatch(updateCategory(newCategory))); //-> {type: "pizza"}
        return dispatch(updateCategory(newCategory));
    }

    // Hier onclick rausnehmen
    return (
        <button className="food-buttons" onClick={changeCategory} value={foodCategorie}>
            {buttonName}
        </button>
    )
};

export default FoodButton


