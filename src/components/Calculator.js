import { calculator } from '../css/Calculator.module.css';
import Display from '../components/Display'
import ButtonsContainer from '../components/ButtonsContainer'

function Calculator () {
  return (
    <div className={calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  )
}

export default Calculator;