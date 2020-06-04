import React from "react";
import * as moment from "moment";
import Switch from "react-switch";
import {appConfig} from '../../utils'
export const PostDisplay = ({ post }) => {
  const [postStatus, setPostStatus] = React.useState(post.status == "Active" ? true : false);
  const handleChange = () =>{
    setPostStatus(!postStatus)
    const postUrl=appConfig.webApi+"/userStatus/updateUserSatus";
    fetch(postUrl, {
    method: 'post',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      "userId":post.userId,
      "status":postStatus ? "false" : "true"
    })
  }).then(function (response) {
    return response.json();
  }).then(function (responseData) {
    if(responseData.status === " User Status Updated"){

      setPostStatus(!postStatus)
    }
  });
    
  }
   return (
    <tr key ={post}>
                  <td>{post.userId}</td>
                  <td>{post.firstName}</td>
                  <td>{post.lastName}</td>
                  <td>{post.email}</td>
                  <td>{post.phoneNo}</td>
                  <td> <Switch onChange={handleChange} checked={postStatus} /></td>
                  <td>{post.createdDate}</td>
                </tr>
  )
};

export default PostDisplay;
