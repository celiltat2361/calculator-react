import { calculator } from '../css/Calculator.module.css';
import Display from '../components/Display'

function Calculator () {
  return (
    <div className={calculator}>
      <Display />
      <h1>This is the button container component</h1>
    </div>
  )
}

export default Calculator;