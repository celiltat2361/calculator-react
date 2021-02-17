import { useContext } from "react";
import { DataContext } from "../contexts/DataContext"
import { displayWrapper, display, input } from '../css/Display.module.css'

function Display() {
  const { dataInput } = useContext(DataContext);
 
  return (
    <div className={displayWrapper}>
      <div className={display}>
        <span className={input}>{dataInput}</span>
      </div>
    </div>  
  )
}
export default Display;