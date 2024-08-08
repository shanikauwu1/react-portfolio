
import  './Hero.css';
import HeroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import xComLight from '../../assets/twitter-light.svg';
import xComDark from '../../assets/twitter-dark.svg';
import linkenInLight from '../../assets/linkedin-light.svg';
import linkenInDark from '../../assets/linkedin-dark.svg';
import gitHubLight from '../../assets/github-light.svg';
import gitHubDark from '../../assets/github-dark.svg';
import Resume from '../../assets/cv.pdf';
import { useTheme } from '../../common/Theme';

function Hero() {
  const {theme,toggleTheme}= useTheme();

  const ThemeIcon= theme === 'light' ? sun :moon;
  const xCom= theme === 'light' ? xComLight :xComDark;
  const linkenIn= theme === 'light' ? linkenInLight :linkenInDark;
  const gitHub= theme === 'light' ? gitHubLight :gitHubDark;

  return (
    <section id='hero' className='container'>
          <div className='proPicContainer'>
            <img src={HeroImg} className='hero' alt='Profile  picture avatar'/>
           <img className='colorMode' src={ThemeIcon} alt='color  mode' onClick={ toggleTheme}/>
        </div> 
        <div className='info'>
          <h1>Shanika <br/> Ekanayake</h1>
          <h2>Frontend Developer</h2>

          <span>
            <a href='https://x.com/shanikauwu' target='_blank' ><img src={xCom} alt="twitter image" /></a>
            <a href='https://github.com/shanikauwu1' target='_blank' ><img src={gitHub} alt="GitHub image" /></a>
            <a href='https://www.linkedin.com/in/shanikajayawardane/' target='_blank' ><img src={linkenIn} alt=" linkenIn image" /></a>
            </span>
            <p className='discription'>With a passion for developing modern React web apps for commercial businesses.</p>
            <a href={Resume} target='_blank'>
              <button className='hover'>Resume</button>
            </a>
          </div> 
    
        </section>
  )
}

export default Hero