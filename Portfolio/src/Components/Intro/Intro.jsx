import style from './IntroStyle.module.css';
import introImg from '../../assets/DrawingMe.png';
import themeIcon from '../../assets/sunIcon.png';
import githubIcon from '../../assets/githubIcon.png'
import linkedIcon from '../../assets/linkedIcon.png'
function Intro() {
  return (
    <section id='intro' className={style.container}>
      <div className={style.colorModeContainer}>
        <img className={style.intro} src={introImg} alt="Little Drawing of Me"/>
        <img className={style.colorMode} src={themeIcon} alt="Color Mode Theme"/>
      </div>

      <div className={style.info}>
        <h1>Kevin<br/>Bach</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/xKevBac" target='_blank'>
            <img src={githubIcon} alt="Github Icon" />
          </a>

          <a href="https://www.linkedin.com/in/kevin-bach-43727a295?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVK8e4IssQgeSUm02t9S2qQ%3D%3D5" 
          target='_blank'>
            <img src={linkedIcon} alt="Linkedin Icon" />
          </a>
        </span>

        <p>I'm am very passionate on developing React Website Applications!</p>
      
      </div>
    </section>
  )
}

export default Intro
