import React from "react";
import  { createRoot }  from "react-dom";
import Pet from './Pet'

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Luna",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      animal: "bird",
      name: "pepper",
      breed: "cockatiel",
    }),
    React.createElement(Pet, {
      animal: "cat",
      name: "doink",
      breed: "mixed",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
