import '../style/Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-scroll'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';

function Navbar() {
const [nav, setNav] = useState(false)
const [slide, setSlide] = useState(false)

const handleNav = () => {
    setSlide(!slide)
    setNav(!nav)
}

    return (
        <div className='navbar'>
            <div className='container'>
                <div className={slide ? 'logo slide-right' : 'logo'}>
                    {/* <h3>Kevin Son</h3> */}
                    <a href='https://github.com/CodingKevin95' target="_blank" rel="noreferrer">
                        <GitHubIcon className='contactIcon' sx={{width: {lg:'50px', xs: '35px'}, height: {lg:'50px', xs: '35px'}}}/>
                    </a>
                    <a href='https://www.linkedin.com/in/kevins-on/' target="_blank" rel="noreferrer">
                        <LinkedInIcon className='contactIcon' sx={{width: {lg:'50px', xs: '35px'}, height: {lg:'50px', xs: '35px'}}}/>
                    </a>
                    <a href='https://content.celero.io/s/6a752c6b/kevin-son-resumedocx-dragged/' target="_blank" rel="noreferrer">
                        <DescriptionIcon className='contactIcon' sx={{width: {lg:'50px', xs: '35px'}, height: {lg:'50px', xs: '35px'}}}/>
                    </a>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='/'><Link onClick={handleNav} activeClass='active' to='home' spy={true} smooth={true} duration={500}>Home</Link></a></li>
                    <li><a href='/'><Link onClick={handleNav} activeClass='active' to='about' spy={true} smooth={true} duration={500}>About</Link></a></li>
                    <li><a href='/'><Link onClick={handleNav} activeClass='active' to='projects' spy={true} smooth={true} duration={500}>Projects</Link></a></li>
                    <li><a href='/'><Link onClick={handleNav} activeClass='active' to='contact' spy={true} smooth={true} duration={500}>Contact</Link></a></li>

                </ul>
                <div className='hamburger' onClick={handleNav}>
                    {nav ? (<FaTimes size={20} style={{color: 'black'}}/>) : (<FaBars size={20} style={{color: 'black'}}/>)}
                </div>                
            </div>

        </div>
    )

}

export default Navbar