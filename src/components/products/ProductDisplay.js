import React from "react";
// import * as moment from "moment";
import Switch from "react-switch";
import { NavLink } from 'react-router-dom';
import {  CardBody,
  CardTitle,
  CardImg,
  Button } from "shards-react";
import {appConfig} from '../../utils'
export const ProductDisplay = ({ post }) => {
  const [postStatus, setPostStatus] = React.useState(post.status == "Active" ? true : false);


  const handleChange = () =>{
    setPostStatus(!postStatus)
    const postUrl=appConfig.webApi+"/productStatus/updateProductSatus";
    fetch(postUrl, {
    method: 'post',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      "productId":post.productId,
      "status":postStatus ? "false" : "true"
    })
  }).then(function (response) {
    return response.json();
  }).then(function (responseData) {
    if(responseData.status === " Product Status Updated"){

      setPostStatus(!postStatus)
    }
  });
    
  }
   return (
    <React.Fragment key ={post}> 
    {post.image == "" ? (
        <CardImg src="https://place-hold.it/300x200" />
      ) : (
        <CardImg src={"http://3.17.47.41:81/images/"+post.image} style={{height:"200px", Width:"400px"}}/>
      )}
    <Button size="sm" theme="success" style={{position: 'absolute',top:'8px',right: '16px'}}><NavLink to={"/Addimage/"+post.productId}> <b>Add Image</b></NavLink> </Button>
    <CardBody>
      <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.productName}
                    </a>
                  </h5>
     <span>
    <p className="card-text d-inline-block mb-3">Product Id:{" "}{post.productId},{"   "}Brand:{" "}{post.brand}</p>
     <p>Color:{" "}{post.color},{"   "}Size:{" "}{post.size}</p>
     <p className="card-text d-inline-block mb-3">Type:{" "}{post.type},{"   "}Height:{" "}{post.height}</p>
     <p className="card-text d-inline-block mb-3">Weight:{" "}{post.width},{"   "}Catogory Id: {' '} {post.categoryId}</p>
     <p className="card-text d-inline-block mb-3">Product Status:{"  "}<Switch onChange={handleChange} checked={postStatus} /></p>
     {/* <p>{post.image}</p> */}
     <p className="card-text d-inline-block mb-3">Product Price:{"   "}{post.price}</p>
      </span> 
    </CardBody>
    </React.Fragment>
   
  )
};

export default ProductDisplay;
