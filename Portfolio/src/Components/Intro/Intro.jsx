import style from './IntroStyle.module.css';
import introImg from '../../assets/CircleMe.png';
import themeIcon from '../../assets/sunIcon.png';
import githubIcon from '../../assets/githubIcon.png';
import linkedIcon from '../../assets/linkedIcon.png';
import resume from '../../assets/Resume.pdf';

function Intro() {
  return (
    <section id='intro' className={style.container}>
      <div className={style.colorModeContainer}>
        <img className={style.intro} src={introImg} alt="Pic of Me"/>
        <img className={style.colorMode} src={themeIcon} alt="Color Mode Theme"/>
      </div>

      <div className={style.info}>
        <h1>Kevin<br/>Bach</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/xKevBac" target='_blank'>
            <img src={githubIcon} alt="Github Icon" />
          </a>

          <a href="https://www.linkedin.com/in/kevin-bach-sand2ebi" 
          target='_blank'>
            <img src={linkedIcon} alt="Linkedin Icon" />
          </a>
        </span>

        <p>I'm am very passionate on developing React Website Applications!</p>

        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Intro
