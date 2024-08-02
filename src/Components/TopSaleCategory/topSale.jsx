import React from 'react'
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faCircleInfo, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const TopSale = () => {
    return (
        <div className='topSale'>
            <div className='saleHead'>
                <div className='saleTitle'>
                    <FontAwesomeIcon className='saleChart' icon={faChartSimple} style={{color: "#141519",}} />
                    <span>Top Sales Category</span>
                    <FontAwesomeIcon className='circleI' icon={faCircleInfo} style={{color: "#848486",}} />
                </div>
                <div className='Dot'>
                    <FontAwesomeIcon icon={faEllipsis} style={{color: "#000004",}} />
                </div>
            </div>
            <div className='saleBody'>
                <div className='accessories'>
                    <div className='progress1'>
                        <p>Accessories</p>
                    </div>
                        <p>42%</p>
                </div>
                <div className='electronics'>
                    <div className='progress2'>
                        <p>Electronics</p>
                    </div>
                    <p>32%</p>
                </div>
                <div className='fashion'>
                    <div className='progress3'>
                        <p>Fashion</p>
                    </div>
                    <p>24%</p>
                </div>
                <div className='furniture'>
                    <div className='progress4'>
                        <p>Furniture</p>
                    </div>
                    <p>16%</p>
                </div>
            </div>
        </div>
    )
}

export default TopSale
