import NewCost from "./components/newCost/NewCost";
import Costs from "./components/Costs/Costs"
import React, { useState } from "react";


const INITIAL_COSTS = [{
  id: 'c1',
  date: new Date(2024, 2, 12),
  title: 'Холодильник',
  amount: 999.99,
},
{
  id: 'c2',
  date: new Date(2023, 4, 10),
  title: 'Macbook',
  amount: 1200,
},
{
  id: 'c3',
  date: new Date(2022, 1, 12),
  title: 'Iphone',
  amount: 800,
},

]

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) =>{
    console.log(cost);
    console.log('We are in app component');
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs = {costs}/>
    </div>
  );
}

export default App;
