import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaNpm } from "react-icons/fa";
import { SiMongodb, SiGithub, SiHeroku, SiNetlify, SiVisualstudiocode } from  "react-icons/si"
import { TbApi } from "react-icons/tb"

function SkillsBanner() {
    return(
        <div>
            <h1>Skills</h1>
            <div className="catagory">
                    <div className='iconBox'><FaHtml5 className='icons' /><p className='iconLabel'>HTML</p></div>
                    <div className='iconBox'><FaCss3Alt className='icons' /><p className='iconLabel'>CSS</p></div>
                    <div className='iconBox'><FaJsSquare className='icons' /><p className='iconLabel'>JavaScript</p></div>
                    <div className='iconBox'><FaReact className='icons' /><p className='iconLabel'>React</p></div>
                    <div className='iconBox'><FaNodeJs className='icons' /><p className='iconLabel'>Node.js</p></div>
                    <div className='iconBox'><SiMongodb className='icons' /><p className='iconLabel'>MongoDB</p></div>
                    <div className='iconBox'><SiGithub className='icons' /><p className='iconLabel'>Git/GitHub</p></div>
                    <div className='iconBox'><SiHeroku className='icons' /><p className='iconLabel'>Heroku</p></div>
                    <div className='iconBox'><SiNetlify className='icons' /><p className='iconLabel'>Netlify</p></div>
                    <div className='iconBox'><SiVisualstudiocode className='icons' /><p className='iconLabel'>VS Code</p></div>
                    <div className='iconBox'><TbApi className='icons' /><p className='iconLabel'>API</p></div>
                    <div className='iconBox'><FaNpm className='icons' /><p className='iconLabel'>NPM</p></div>
            </div>
        </div>
    )
}

export default SkillsBanner