import React from 'react'
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const WelcomBar = () => {
  return (
    <div className='main'>
        <div className='text'>
            <div className='welcomeName'>
                <p>Welcome back,</p>
                <p>Bharath Sevarkodiyon</p>
            </div>
            <div className='searchAndNotification'>
                <div className='search'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#0a0a12",}} />
                    <input type="text" placeholder='Search'/>
                </div>
                <FontAwesomeIcon className='bellIcon' icon={faBell} style={{color: "#0a0a12",}} />
            </div>
        </div>  
    </div>
  )
}

export default WelcomBar
