import { useState } from 'react';
import { buttons } from "../css/ButtonsContainer.module.css";
import Button from "./Button"

function ButtonsContainer() {
  const [buttonValues, setButtonsValues] = useState([
    7, 8, 9, "/", 4, 5, 6, "x", 1, 2, 3, "-", "clear", 0, "+", "="
  ])

  return (
    <div className={buttons}>
      {buttonValues.map((value) =>(
        <Button key={value} data={value} />
      ))}
      
    </div>
  )
}

export default ButtonsContainer;