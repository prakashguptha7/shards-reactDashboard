import React from "react";
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody,Button } from "shards-react";
import {appConfig} from '../utils'

import {CustomerDisplay} from '../components/customers/CustomerDisplay';
const { useEffect, useState } = React;

export const Customers = (props) => {
  let userType ="User";
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postUrl=appConfig.webApi+"/customerList/getCustomerList";
    fetch(postUrl, {
    method: 'post',
  //   headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     'Access-Control-Allow-Origin': '*'
  // },
  body: JSON.stringify(null)
}).then(function (response) {
  return response.json();
}).then(function (responseData) {
  // console.log(responseData);
setPosts(responseData);
});
  }, [])
  return (
    <>
     <Button theme="success" style={{marginLeft: '90%',marginTop: "1%"}}><NavLink to="/Addcustomers"><b>Add Customer</b>  </NavLink></Button>
  <Container fluid className="main-content-container px-5">
    <Row>
      <Col>
        <Card small className="mb-4" style={{marginTop:"1%"}}>
         {/*  <CardHeader className="border-bottom">
            <h6 className="m-0">Active Users</h6>
          </CardHeader> */}
          <CardBody className="p-0 pb-3">
            <table className="table mb-0" >
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                  Id
                  </th>
                  <th scope="col" className="border-0">
                  Customer Name
                  </th>
                  <th scope="col" className="border-0">
                  Customer Code
                  </th>
                  <th scope="col" className="border-0">
                  Address
                  </th>
                  {/* <th scope="col" className="border-0">
                  Adderss2
                  </th> */}
                  <th scope="col" className="border-0">
                  PinCode
                  </th>
                  {/* <th scope="col" className="border-0">
                  City
                  </th> */}
                  {/* <th scope="col" className="border-0">
                  Email
                  </th> */}
                  <th scope="col" className="border-0">
                  PhoneNo
                  </th>
                  <th scope="col" className="border-0">
                  GST No
                  </th>
                  <th scope="col" className="border-0">
                  Status
                  </th>
                  {/* <th scope="col" className="border-0">
                  CreatedDate
                  </th>
                  <th scope="col" className="border-0">
                  CreatedBy
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {posts.map((p, index) => (
                  <CustomerDisplay post ={p} key={index}/>
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

export default Customers;