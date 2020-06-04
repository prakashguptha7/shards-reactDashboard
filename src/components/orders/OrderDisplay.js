import React from "react";
// import * as moment from "moment";
import Switch from "react-switch";
import {appConfig} from '../../utils';
import { NavLink } from 'react-router-dom';
export const OrderDisplay = ({ post }) => {
  
    function handleClick(e) {
      e.preventDefault();
      console.log(post.orderId);
      localStorage.setItem('orderId', post.orderId);
    }

   return (
    <tr key ={post}>
                  <td onClick={handleClick}><NavLink to="/Orderids"><b>{post.orderId}</b></NavLink></td>
                  <td>{post.customerName}</td>
                  <td>{post.UserName}</td>
                  <td>{post.price}</td>
    </tr>
  )
};

export default OrderDisplay;
