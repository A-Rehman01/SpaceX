import React from 'react'
import '../App/App.css'
import logo from  '../assests/spacex.svg'
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='logodiv'>
            <Link className='linkss' to='/'>
            <img className='logo' src={logo} alt=""/>
            </Link>
            </div> 
           <div className='gitdiv'>
            <a  className='linkss' href="https://github.com/A-Rehman01/SpaceX" rel="noopener noreferrer" target='_blank'>   
            <GitHubIcon className='git'/>
            </a>
            </div> 
        </div>
    )
}
