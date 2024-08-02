import React from 'react'
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faCircleInfo, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const StoreOrder = () => {
    return (
        <div className='storeOrder'>
            <div className='storeHead'>
                <div className='storeTitle'>
                    <FontAwesomeIcon className='storeDollar' icon={faDollarSign} />
                    <p className='storeTitleName'>Store Order Analysis</p>
                    <FontAwesomeIcon className='circleInfo' icon={faCircleInfo} style={{color: "#848486",}} />
                </div>
                <div className='threeDot'>
                    <FontAwesomeIcon icon={faEllipsis} style={{color: "#000004",}} />
                </div>
            </div>
            <div className='storeBody'>
                <div className='storeBodyContainer'>
                    <div className='storeBodyContent'>
                        <p>Online Store</p>
                        <p>6,828,782</p>
                        <div className='storeInc'>
                            <p>+1.23</p>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                    <div className='storeBodyContent'>
                        <p>Offline Store</p>
                        <p>3,363,430</p>
                        <div className='storeInc'>
                            <p>+3.13</p>
                            <p>Higher than last month</p>
                        </div>
                    </div>
                </div>
                <div className='sankeyChart'>

                </div>
            </div>
        </div>
    )
}

export default StoreOrder
