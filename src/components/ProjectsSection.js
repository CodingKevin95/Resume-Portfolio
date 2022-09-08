import '../style/Projects.css'
import rps from '../assets/rps.png'
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaNpm } from "react-icons/fa";
import { SiMongodb, SiGithub, SiHeroku, SiNetlify, SiVisualstudiocode } from  "react-icons/si"
import { TbApi } from "react-icons/tb"

function ProjectSection() {
    return (
        <div className='projects'>
            <p className='projectsTitle'>Projects</p>
            <div className="projectBox">
                <h3>Rock Paper Scissors</h3>
                <div className='projectBtn'>
                <a href='https://codingkevin95.github.io/-rock-paper-scissor/' target="_blank" rel="noreferrer">
                    <button className='linkBtn'>Live</button>
                </a>
                <a href='https://github.com/CodingKevin95/-rock-paper-scissor' target="_blank" rel="noreferrer">
                    <button className='linkBtn'>Source Code</button>
                </a>    
                </div>
                <img className='projectPhoto' src={require('../assets/rps.png')} />
                <div className='projectGroupLogo'>
                    <FaJsSquare className='projectLogo'/>
                    <FaCss3Alt className='projectLogo'/>
                    <FaHtml5 className='projectLogo'/>
                    <SiVisualstudiocode className='projectLogo'/>
                    <SiGithub className='projectLogo'/>
                </div>
                <p>A simplistic game that everyone knows and loves, but with a narrative and a unique UI and interactions. </p>
            </div>
            <div className="projectBox">
                <h3>Weather App</h3>
                <div className='projectBtn'>
                <a href='https://weather-app-2a1a4b.netlify.app/' target="_blank" rel="noreferrer">
                    <button className='linkBtn'>Live</button>
                </a>
                <a href='https://github.com/CodingKevin95/React-Weather-Project' target="_blank" rel="noreferrer">
                    <button className='linkBtn'>Source Code</button>
                </a>    
                </div>
                <img className='projectPhoto' src={require('../assets/weather-app.png')} />
                <div className='projectGroupLogo'>
                    <FaJsSquare className='projectLogo'/>
                    <FaCss3Alt className='projectLogo'/>
                    <FaReact className='projectLogo'/>
                    <SiVisualstudiocode className='projectLogo'/>
                    <SiGithub className='projectLogo'/>
                    <SiNetlify className='projectLogo'/>
                    <TbApi className='projectLogo'/>
                </div>
                <p>This application allows the user to search their desired location's current weather, hourly forcast, daily forcast, and other minor descriptions. This is all done by using OpenWeather's API.</p>
            </div>
            <div className="projectBox">
                <h3>Solar Conveyance</h3>
                <div className='projectBtn'>
                <a href='https://solar-conveyance-project.netlify.app/' target="_blank" rel="noreferrer">
                    <button className='linkBtn'>Live</button>
                </a>
                <a href='https://github.com/CodingKevin95/solar-conveyance' target="_blank" rel="noreferrer">
                    <button className='linkBtn'>Source Code</button>
                </a>  
                </div>
                <img className='projectPhoto' src={require('../assets/space.png')} />
                <div className='projectGroupLogo'>
                    <FaJsSquare className='projectLogo'/>
                    <FaCss3Alt className='projectLogo'/>
                    <FaReact className='projectLogo'/>
                    <SiVisualstudiocode className='projectLogo'/>
                    <SiGithub className='projectLogo'/>
                    <SiNetlify className='projectLogo'/>
                    <TbApi className='projectLogo'/>
                </div>
                <p>The objectivce of this application is to display images and information about our solar system. APIs from SpaceX and NASA were used to create this application.</p>
            </div>
            <div className="projectBox">
                <h3>iFitness</h3>
                <div className='projectBtn'>
                <a href='https://fierce-lake-31754.herokuapp.com/' target="_blank" rel="noreferrer">
                    <button className='linkBtn'>Live</button>
                </a>
                <a href='https://github.com/CodingKevin95/iFitness' target="_blank" rel="noreferrer">
                    <button className='linkBtn'>Source Code</button>
                </a>  
                </div>
                <img className='projectPhoto' src={require('../assets/iFitness.png')} />
                <div className='projectGroupLogo'>
                    <FaJsSquare className='projectLogo'/>
                    <FaCss3Alt className='projectLogo'/>
                    <FaReact className='projectLogo'/>
                    <SiVisualstudiocode className='projectLogo'/>
                    <SiGithub className='projectLogo'/>
                    <SiHeroku className='projectLogo'/>
                    <TbApi className='projectLogo'/>
                    <FaNodeJs className='projectLogo'/>
                    <SiMongodb className='projectLogo'/>
                </div>
                <p>iFitness is a fitness application that displays how to do exercises depending on if the user seraches up the specific exercise or body part. The API use was from RapidAPI (ExerciseDB). By using CRUD, the apllication allows the users to input their exercise log keep track of their fitness progression. This application is hosted on Heroku so there will be a slight delay when loading up to the website.</p>
            </div>
        </div>
    )
}

export default ProjectSection