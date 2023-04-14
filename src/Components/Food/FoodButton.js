import React, {useCallback} from 'react'
import './FoodButton.css'

const FoodButton = ({buttonName, foodCategorie, onCategoryChange}) => {

    const onButtonChange= (category) => {
        onCategoryChange(category)
    }

    return (
        <button className="food-buttons" onClick={onButtonChange} value={foodCategorie}>
            {buttonName}
        </button>
    )
};

export default FoodButton



