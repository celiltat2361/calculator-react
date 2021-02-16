import style from '../css/Home.module.css';
import Calculator from '../components/Calculator';

function Home () {
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <h1>here is calculator area</h1> 
        <Calculator />
      </div>
    </div>
  )
}

export default Home;