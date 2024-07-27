import React from 'react';
import './DiagramBar.css';

function DiagramBar(props) {

  let barFillHight = '0%';

  if(props.maxValue > 0) {
    barFillHight = Math.round(props.value / props.maxValue * 100) + '%';
  }

  return (
    <div className='diagram-bar'>
      <div className='diagram-bar__inner'>
        <div className='diagram-bar__fill' style={{height : barFillHight}}></div>
      </div>
      <div className='diagram-bar__label'>
          {props.label}
      </div>
    </div>
  )
}

export default DiagramBar