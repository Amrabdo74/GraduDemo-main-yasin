import React from 'react';
import dropDownArrow from './images/shape.svg'
import { useState } from 'react';

const SelectBox = (props) => {
  const selections = props.selections;
  const handleChange = props.handleChange;
  const [clicked, setClicked] = useState(false);
  const changeClicked = ()=>{
    setClicked(!clicked)
  }
  return (
    <>
      {selections.map((i, index) => (
        <div key={index} className='data-select' onClick={changeClicked}>
          <div className='select-box'><span>{props.selectedOption}</span><img src={dropDownArrow}/></div>
          <div className={`menu ${clicked?'view-drop':'hide-drop'}`}>
            {i.map((x, subIndex) => (
              <span className='drop-menu-item'key={subIndex} onClick={handleChange} value={`${x}`}>{x}</span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SelectBox;
