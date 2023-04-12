# Hdm React Lecture

This repository contains exercises for practicing the stuff you learned during our lecture. You will transform a static html website to a dynamic, component based website using react.

## Installation

Welcome to our react lecture exercises. To follow along, please complete these steps:

1. Install node.js: https://nodejs.org/en/download
2. Open a terminal and cd into this directory
3. Run `npm install` to get all the dependencies
4. Run `npm start` to start the webserver

Then your default browser should open this address: `localhost:3000` and display a website.
If not, try to open this website manually.

# Exercises
## Exercise 1 / Components

Your task is to replace the static food list with some react components. At the end you should have seperate FoodItem components for the dishes inside a category which are displayed inside a FoodList. Also every category from 'Beliebt, Pizza, Pasta, Salate' should be button component.

![FoodList](exersice-resources/readme-images/exercise1.png)

You need to create:
- FoodList (the whole area with all the food entries)
- FoodItem (a single food entry)
- FoodButton (the food category buttons)

Use the data from [here](./exersice-resources/allFood.js) inside the foodList as data input.

Get some [hints](#exercise-1-hints).

## Exercise 2 / States

Now we want to bring some life to the food category section.

![Food Category](exersice-resources/readme-images/food-category.png)

Your task is to implement buttons and states to switch to a different food category and have the foodList updated accordingly.

Get some [hints](#exercise-2-hints).

## Exercise 3 / Modal

Let's add some functionality to our foodItems. Your goal is to implement a modal which pops up, if you click on the 'plus' icon. There you can set how many pizzas you want and can choose some more options.

![Modal](./exersice-resources/readme-images/modal.png)

Use states to set the open/close status of the modal and to store which foodItem was clicked.
The modal can be placed inside foodList, but you need to update the foodItem to get some data for the modal.

You can find our premade modal component and it's stylesheet [here](./exersice-resources/Components).

Get some [hints](#exercise-3-hints).

## Exercise 4 / Cart

Now we want to add our delicious pizzas to the cart by clicking on the add button inside the modal.

![Cart](./exersice-resources/readme-images/cart.png)

For that we need to propagate the data to our cart component.
One approach could be to store the cart items inside an object in the app component, which then feeds the cart.
You could store the user input data from the modal in an object like this `{"title": food.title, "price": total, "counter": counter}` and propagate it up.

You will find a complete cart component [here](./exersice-resources/Components/Cart). The cart component is made up out of a CartItem and a CartSummary. 

Get some [hints](#exercise-4-hints).

## Exercise 5 / Conditionals

Now we want to render content based on a condition. You need to modify the cart so that it displays [this](./exersice-resources/cart-conditional-if-else.js), if no items are inside the cart.
Also add a if/else ternary expression inside CartSummary which adds the following text

`Kostenfreie Lieferung ab 30€`

if the total matches the condition.

Get some [hints](#exercise-5-hints).

# Hints
## Exercise 1 Hints
1. Create the 3 components in a 'Components' folder.
2. Create a FoodButton component which returns a `<button>` and replace the static html with a JSX element to generate a button for every category. You can do that with a `.map()` function.
3. Create a FoodItem which uses props to display the title, description, size, image and price of a dish.
4. Create a FoodList component and add the food data object from [here](./exersice-resources/allFood.js) to it. Add another `.map()` function which returns a FoodItem.

## Exercise 2 Hints
1. Add a 'category' state to store the selected category.
2. Add the function 'setCategory' to the FoodButton so that you can implement an event inside the FoodButton component and call this function.

## Exercise 3 Hints
1. Create the components and import them into the foodList.
2. Create states inside foodList to store the open/close status and the clickedItem for the modal.
3. Implement a function to set the allFoods object to the selectd category (slice the array)
4. Add a function to set openModal to true/false
5. Add the two functions you just created to the foodItem attributes so that you can call them inside foodItem
6. Call the functions with `onClick` inside the foodItem

## Exercise 4 Hints
1. Add a cartItems state inside the app component with a empty list as an initial state.
2. Add a function to append an item to that list. You can use the `...cartItems`` notation to expand items from a list.
3. Propagate this function down inside foodList and then inside the modal.
4. Call it there and add some data to the cartItems state.
5. Set the cartItems as an attribute for the cart component to propagete the state down into the cart.

## Exercise 5 Hints
1. For the full/empty cart make an if/else statement and return either the CartItem component if the cart as some items or return the empty-cart-message from [here](./exersice-resources/cart-conditional-if-else.js).
2. The solution for the ternary expression can be found [here](./exersice-resources/cart-conditional-ternary.js)
