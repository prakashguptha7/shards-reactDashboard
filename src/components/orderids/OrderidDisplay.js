import React from "react";
// import * as moment from "moment";
import Switch from "react-switch";
import {appConfig} from '../../utils'
export const OrderidDisplay = ({ post }) => {
   return (
    <tr key ={post}>
                 <td>{post.productName}</td>
                  <td>{post.customerName}</td>
                  <td>{post.UserName}</td>
                  <td>{post.quantity}</td>
                  <td>{post.price}</td>
                  <td>{post.amount}</td>
                </tr>
  )
};

export default OrderidDisplay;
