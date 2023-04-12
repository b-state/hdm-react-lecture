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

Get some [hints](#exercise-1-hints)

## Exercise 2 / States

Now we want to bring some life to the food category section.

![Food Category](exersice-resources/readme-images/food-category.png)

Your task is to implement buttons and states to switch to a different food category and have the foodList updated accordingly.

Get some [hints](#exercise-2-hints)

# Hints
## Exercise 1 Hints
1. Create the 3 components in a 'Components' folder.
2. Create a FoodButton component which returns a `<button>` and replace the static html with a JSX element to generate a button for every category. You can do that with a `.map()` function.
3. Create a FoodItem which uses props to display the title, description, size, image and price of a dish.
4. Create a FoodList component and add the food data object from [here](./exersice-resources/allFood.js) to it. Add another `.map()` function which returns a FoodItem.

## Exercise 2 Hints
1. Add a 'category' state to store the selected category.
2. Add the function 'setCategory' to the FoodButton so that you can implement an event inside the FoodButton component and call this function.
