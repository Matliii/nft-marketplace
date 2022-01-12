import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <h1>NFT <br></br> Marketplace</h1>
            </div>

        <div className='searchBar'>
            <div className='searchIconContainer'></div>
                <img src={searchIcon} alt='' />
                    <input 
                    className='searchInput' 
                    placeholder='Collection, item or user...'
                        />
        </div>

        <div className='headerItems'>
            
            <Link className='headerLinks' to="/mainpage"><p>Main</p></Link>
            <Link className='headerLinks' to="/"><p>Marketplace</p></Link>
            <Link className='headerLinks' to="/aboutpage"><p>About</p></Link>
            
            
        </div>

        <div className='headerActions'>
            <div className='themeSwitchContainer'>
            <img src={themeSwitchIcon} alt=''/>
            </div>
        </div>

        <div className='LoginButton'>GET IN!</div>

        </div>
    )
}

export default Header
