import React from "react";
import Switch from "react-switch";
import {appConfig} from '../../utils'
export const CustomerDisplay = ({ post }) => {
  const [postStatus, setPostStatus] = React.useState(post.status == "Active" ? true : false);
  const handleChange = () =>{
    setPostStatus(!postStatus)
    const postUrl=appConfig.webApi+"/customerStatus/updateCustomerSatus";
    fetch(postUrl, {
    method: 'post',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(
      {
        "customerId":post.customerId,
        "status":postStatus ? "false" : "true"
      }
    )
  }).then(function (response) {
    return response.json();
  }).then(function (responseData) {
    if(responseData.status === "Customer Status Updated"){
      setPostStatus(!postStatus)
    }
  });
    
  }
   return (
    <tr key ={post}>
                  <td>{post.customerId}</td>
                  <td>{post.customerName}</td>
                  <td>{post.customerCode}</td>
                  <td>{post.address1}{' '}{post.adderss2}</td>
                  {/* <td>{post.adderss2}</td> */}
                  <td>{post.pinCode}</td>
                  {/* <td>{post.city}</td> */}
                  {/* <td>{post.email}</td> */}
                  <td>{post.phoneNo}</td>
                  <td>{post.gstNo}</td>
                  <td> <Switch onChange={handleChange} checked={postStatus} /></td>
                  {/* <td>{post.createdDate}</td>
                  <td>{post.createdBy}</td> */}
                </tr>
  )
};

export default CustomerDisplay;
