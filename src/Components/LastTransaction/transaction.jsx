import React from 'react'
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faClock, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Transaction = () => {
    return (
        <div className='transaction'>
            <div className='transactionContent'>
                <div className='transactionTitle'>
                    <FontAwesomeIcon className='clock' icon={faClock} style={{ color: "#000002", }} />
                    <span>Last Transaction</span>
                    <FontAwesomeIcon className='circleI' icon={faCircleInfo} style={{ color: "#848486", }} />
                </div>
                <div className='menu'>
                    <FontAwesomeIcon icon={faEllipsis} style={{color: "#000004",}} />
                </div>
            </div>
            <div>
                <table>
                    <tr>
                        <th>No.</th>
                        <th>ID Transaction</th>
                        <th>Cust.ID</th>
                        <th>Cust.Name</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Order Date</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>H1283123</td>
                        <td>W12389128</td>
                        <td>James Korsgaard</td>
                        <td>Pearl Necklace</td>
                        <td>$12</td>
                        <td>6/10/2023</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>H123898</td>
                        <td>W12312453</td>
                        <td>Rayna Franci</td>
                        <td>Cool Earnings</td>
                        <td>$14</td>
                        <td>5/10/2023</td>
                        <td>Success</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Transaction
