import style from './IntroStyle.module.css';
import introImg from '../../assets/DrawingMe.png';
import themeIcon from '../../assets/sunIcon.png';

function Intro() {
  return (
    <section id='intro'>
      <div className={style.colorModeContainer}>
        <img className={style.intro} src={introImg} alt="Little Drawing of Me"/>
        <img className={style.colorMode} src={themeIcon} alt="Color Mode Theme"/>
      </div>
    </section>
  )
}

export default Intro
