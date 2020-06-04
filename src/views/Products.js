import React from "react";
import { Container, Row, Col, Card} from "shards-react";
import { appConfig } from '../utils'

import { ProductDisplay } from '../components/products/ProductDisplay';
const { useEffect, useState } = React;

const Products = (props) => {
 
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postUrl = appConfig.webApi + "/productList/getProductList";
    fetch(postUrl, {
      // method: 'get',
      // body: JSON.stringify(null)
    }).then(function (response) {
      return response.json();
    }).then(function (responseData) {
      setPosts(responseData);
    });
  }, [])
  return (
    <>
  
 <Container>
        <Row>
      {posts.map((p, index) => (
          <Col>
          <Card style={{ width: "300px", height:"580px", marginTop:"20px",marginLeft:"25px" }} >
          <ProductDisplay post={p} key={index} />
          </Card>
         </Col>
                 
      ))}
   </Row>
</Container>
</>
);
};

export default Products;