import React from "react";
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody,
Button } from "shards-react";
import { appConfig } from '../utils'

import { PostDisplay } from '../components/posts/PostDisplay';
const { useEffect, useState } = React;

const Posts = (props) => {
  // let userType = "User";
 
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postUrl = appConfig.webApi + "/userList/getUserList";
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
     
      <Button theme="success" style={{marginLeft: '90%',marginTop: "1%", fontSize:'15px',}}><NavLink to="/Addcontact"><b>Add User</b>  </NavLink></Button>
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
                    UserId
                  </th>
                  <th scope="col" className="border-0">
                    FirstName
                  </th>
                  <th scope="col" className="border-0">
                    LastName
                  </th>
                  <th scope="col" className="border-0">
                    Email
                  </th>
                  <th scope="col" className="border-0">
                    PhoneNo
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                  <th scope="col" className="border-0">
                    Created Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p, index) => (
                  <PostDisplay post={p} key={index} />
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

export default Posts;