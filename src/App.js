import React, { useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 5, 6),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2022, 6, 7),
    description: "Lenovo Legion 7",
    amount: 1399.99,
  },
  {
    id: "c3",
    date: new Date(2019, 5, 8),
    description: "AKG K140",
    amount: 249.99,
  },
  {
    id: "c4",
    date: new Date(2019, 4, 10),
    description: "Google Pixel 6",
    amount: 649.99,
  },
  {
    id: "c5",
    date: new Date(2020, 3, 8),
    description: "Monitor LG OLED 32",
    amount: 1000,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;

// return React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Start")
// )
