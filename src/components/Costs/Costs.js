import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
import React, { useState } from 'react';
import CostDiagram from "./CostDiagram";

import './Costs.css';


function Costs(props) {

  const [defaultYear, setDefaultYear] = useState('2024')

  const addCostsFilterYear = (selectedYear) => {
    setDefaultYear(selectedYear);
  }
  
  const filtredCosts = props.costs.filter((item) => item.date.getFullYear().toString() === defaultYear);


  return (
    <div>
      <Card className="costs">
        <CostsFilter defaultYear = {defaultYear} onSelectedYear = {addCostsFilterYear}/>
        <CostDiagram costs={filtredCosts}/>
        <CostList costs={filtredCosts}/>
      </Card>
    </div>
  )
}

export default Costs