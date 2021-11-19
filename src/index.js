import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Menu from "./Menu";
import reportWebVitals from "./reportWebVitals";

const data = [
  {
    name: "Baked Salmon",
    ingredients: [
      {
        name: "Salmon",
        amount: 1,
        measurement: "lb",
      },
      {
        name: "Pine nuts",
        amount: 1,
        measurement: "cup",
      },
      {
        name: "Butter Lettuce",
        amount: 2,
        measurement: "cups",
      },
      {
        name: "Yellow Squash",
        amount: 1,
        measurement: "med",
      },
      {
        name: "Olive Oil",
        amount: 0.5,
        measurement: "cup",
      },
      {
        name: "Garlic",
        amount: 3,
        measurement: "cloves",
      },
    ],
    steps: [
      "Preheat the oven to 350 degrees",
      "Spread the olive oil around a glass baking dish.",
      "Add the yellow squash and place in the oven for 30 mins",
      "Add the salmon, garlic, and pine nuts to the dish",
      "Bake for 15 minutes",
      "Remove from oven. Add the lettuce and serve",
    ],
  },
  {
    name: "fish tacos",
    ingredients: [
      {
        name: "Whitefish",
        amount: 1,
        measurement: "l lb",
      },
      {
        name: "Cheese",
        amount: 1,
        measurement: "cup",
      },
      {
        name: "Iceberg lettuce",
        amount: 2,
        measurement: "cups",
      },
      {
        name: "tomatoes",
        amount: 2,
        measurement: "large",
      },
      {
        name: "Tortillas",
        amount: 3,
        measurement: "med",
      },
    ],
    steps: [
      "Cook the fish on the grill until hot",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese",
    ],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Menu recipes={data} title="Delicious Recipes" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
