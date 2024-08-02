import React from 'react'
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const Widget = () => {
  return (
    <div className='widgetMain'>
      <div className='left'>
        <div className='WidgetOptions'>
            <p>Overview</p>
            <p>Activity</p>
            <p>Timeline</p>
            <p>Report</p>
        </div>
      </div>
      <div className='right'>
        <div className='week'>
            <span>Last Week</span>
            <FontAwesomeIcon icon={faAngleDown} style={{color: "#17161b",}} />
        </div>
        <div className='export'>
            <FontAwesomeIcon className='upArrow' icon={faSquareArrowUpRight} style={{color: "#ffffff",}} />
            <span>Export</span>
        </div>
      </div>
    </div>
  )
}

export default Widget
