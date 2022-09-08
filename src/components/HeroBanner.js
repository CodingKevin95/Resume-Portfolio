import '../style/Home.css'
import { Link } from 'react-scroll'
import TextAnimation from './TextAnimation'

function HeroBanner() {

    return(
        <div className='heroBanner'>
            <div className='blueLetters'>Hi, my name is
            <h1 className='nameIntro'>Kevin Son.</h1>
            <h1 className='nameIntro second'>I turn ideas into <br /><TextAnimation /></h1>
            <p className='blueLetters paragraph'>I'm a full-stack developer located in the US. I'm passionate in creating beautiful applications/UI for everyone to indulge.</p>
            <ul className='contactBox'>
                <li className='contactRow'><a className='contactBtn' href='/'><Link activeClass='active' to='contact' spy={true} smooth={true} duration={500}>Lets get in touch</Link></a></li>   
            </ul> 
        </div>
     
        </div>    
    )
}

export default HeroBanner