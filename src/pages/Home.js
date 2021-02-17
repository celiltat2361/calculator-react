import style from '../css/Home.module.css';
import Calculator from '../components/Calculator';

function Home () {
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        
        <Calculator />
      </div>
    </div>
  )
}

export default Home;