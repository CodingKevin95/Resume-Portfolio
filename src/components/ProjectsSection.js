import '../style/Projects.css'
import rps from '../assets/rps.png'
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaNpm } from "react-icons/fa";
import { SiMongodb, SiGithub, SiHeroku, SiNetlify, SiVisualstudiocode } from  "react-icons/si"
import { TbApi } from "react-icons/tb"

function ProjectSection() {
    return (
        <div className='projects'>
            <h1 className='projects'>Projects</h1>
            <div className="projectBox">
                <h3>Rock Paper Scissors</h3>
                <div className='projectBtn'>
                    <button className='linkBtn'>Live</button>
                    <button className='linkBtn'>Source Code</button>
                </div>
                <img className='projectPhoto' src={require('../assets/rps.png')} />
                <div className='projectGroupLogo'>
                    <FaJsSquare className='projectLogo'/>
                    <FaCss3Alt className='projectLogo'/>
                    <FaHtml5 className='projectLogo'/>
                    <SiVisualstudiocode className='projectLogo'/>
                    <SiGithub className='projectLogo'/>
                </div>
                <p>With a simplistic game that everyone knows and loves, but with a narrative and a unique UI and interactions. </p>
            </div>
        </div>
    )
}

export default ProjectSection