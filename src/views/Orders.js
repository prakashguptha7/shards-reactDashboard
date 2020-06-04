import React from "react";
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody,
Button } from "shards-react";
import swal from 'sweetalert';
import { appConfig } from '../utils';
import {userDetails} from '../utils';
import { OrderDisplay } from '../components/orders/OrderDisplay';
const { useEffect, useState } = React;

const Orders = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postUrl = appConfig.webApi + "/billing/getBilling";
    fetch(postUrl, {
      method: 'post',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(
        {
            "userId": userDetails().id
        }
      )
    }).then(function (response) {
      return response.json();
    }).then(function (responseData) {
      // console.log(responseData);
    if(responseData.status == "No Orders Found"){
     swal({
      title: responseData.status,
      text: "You Dont Have Any Orders At This Moment",
      icon: "warning",
     })
      }else{
        setPosts(responseData);
      } 
    });
  }, [])
  
  return (
    <>
  <Container fluid className="main-content-container px-4">
    <Row>
      <Col>
        <Card small className="mb-4" style={{ marginTop: "1%" }}>
          {/*  <CardHeader className="border-bottom">
            <h6 className="m-0">Active Users</h6>
          </CardHeader> */}
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                   <th scope="col" className="border-0">
                    Order Id
                  </th>
                  <th scope="col" className="border-0">
                    Customer Name
                  </th>
                  <th scope="col" className="border-0">
                    User Name
                  </th>
                  <th scope="col" className="border-0">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p, index) => (
                  <OrderDisplay post={p} key={index} />
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</>
);
};

export default Orders;