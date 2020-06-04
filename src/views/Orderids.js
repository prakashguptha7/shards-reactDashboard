import React from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import { appConfig } from '../utils';
import { OrderidDisplay } from '../components/orderids/OrderidDisplay';
const { useEffect, useState } = React;

const Orderids = (props) => {
 const orderId = localStorage.getItem('orderId');
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postUrl = appConfig.webApi + "/orders/getOrderDetails";
    fetch(postUrl, {
      method: 'post',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(
        {
          "orderId": orderId 
        }
      )
    }).then(function (response) {
      return response.json();
    }).then(function (responseData) {
      setPosts(responseData);
    });
  }, [])

  return (
    <>
  <Container fluid className="main-content-container px-4">
    <Row>
      <Col>
        <Card small className="mb-4" style={{ marginTop: "1%" }}>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                <th scope="col" className="border-0">
                    Product Name
                  </th>
                  <th scope="col" className="border-0">
                    Customer Name
                  </th>
                  <th scope="col" className="border-0">
                    User Name
                  </th>
                  <th scope="col" className="border-0">
                    Quantity
                  </th>
                  <th scope="col" className="border-0">
                   Price
                  </th>
                  <th scope="col" className="border-0">
                    Total Amount
                  </th>
                
                </tr>
              </thead>
              <tbody>
                {posts.map((p, index) => (
                  <OrderidDisplay post={p} key={index} />
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

export default Orderids;