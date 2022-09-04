import AboutBanner from '../components/AboutBanner'
import SkillsBanner from '../components/SkillsBanner'
import '../style/About.css'

function About () {
    return(
        <div className='aboutBackground' id='about'>
            <AboutBanner />
            <SkillsBanner />
        </div>
    )
}

export default About