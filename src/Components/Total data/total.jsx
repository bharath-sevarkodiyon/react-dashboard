import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faSquareArrowUpRight, faUserGroup, faCube } from "@fortawesome/free-solid-svg-icons";
// import { faCube } from "@fortawesome/free-solid-svg-icons/faCube";

const Total = () => {
    return (
        <div className="total">
            <div className="profitContainer">
                <div className="profit">
                    <div>
                        <FontAwesomeIcon className="dollar" icon={faDollarSign} style={{color: "#2A4BE6",}}/>
                        <p className="dollarTitle">Total Profit</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="dollarSign" icon={faDollarSign} />
                        <span className="dollarValue">8,381.09</span>
                    </div>
                    <div className="dollarInc">
                        <p>+1.03</p>
                        <p>Higher than last month</p>
                    </div>
                </div>
            </div>
            <div className="incomeContainer">
                <div className="income">
                    <div>
                        <FontAwesomeIcon className="down" icon={faSquareArrowUpRight} flip="both" style={{color: "#795adc",}} />
                        <p className="dollarTitle">Total Income</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="dollarSign" icon={faDollarSign} />
                        <span className="dollarValue">10,132.03</span>
                    </div>
                    <div className="downInc">
                        <p>-1.03</p>
                        <p>Lower than last month</p>
                    </div>
                </div>
            </div>
            <div className="customerContainer">
                <div className="customer">
                    <div>
                        <FontAwesomeIcon className="user" icon={faUserGroup} style={{color: "#FB3F11",}} />
                        <p className="customerTitle">Total Customer</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="dollarSign" icon={faDollarSign} />
                        <span className="dollarValue">2,381,932</span>
                    </div>
                    <div className="userInc">
                        <p>-5.32</p>
                        <p>Lower than last month</p>
                    </div>
                </div>
            </div>
            <div className="orderContainer">
                <div className="order">
                    <div>
                        <FontAwesomeIcon className="cube" icon={faCube} style={{color: "#3CBAD0",}} />
                        <p className="dollarTitle">Total Order</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="dollarSign" icon={faDollarSign} />
                        <span className="dollarValue">10,192.213</span>
                    </div>
                    <div className="cubeInc">
                        <p>+4.24</p>
                        <p>Lower than last month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Total;
