/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import swal from 'sweetalert';
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Form,
  FormInput,
  FormGroup,
  Button
} from "shards-react";

import {appConfig} from '../utils'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const loginUrl=appConfig.webApi+"/login/userLogin";
    console.log(loginUrl)
    fetch(loginUrl, {
    method: 'post',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      "email":this.state.email,
      "password":this.state.password
    })
}).then(function (response) {
    return response.json();
}).then(function (responseData) {
  if(responseData.status == "Inavalid details"){
    swal("Invalid Details");
  }else{
    console.log(responseData)
    localStorage.setItem("userData",JSON.stringify(responseData));
     window.location.href="/dashboard";
  }

 })    
  }

   handleChange(e) {
    const obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
}
  render() {
    return (
      <Container fluid className="main-content-container px-4" style={{marginTop:"25%"}}>
        <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h4 className="m-0">{appConfig.appName} - Login</h4>
        </CardHeader>
        <CardBody>
        <Form style={{marginTop:"2%"}} onSubmit={this.handleSubmit}>
      <FormGroup>
       <FormInput  required onChange={this.handleChange} name="email" placeholder="email" />
       </FormGroup>
       <FormGroup>
       <FormInput required onChange={this.handleChange} name="password" placeholder="Password" type="password" />
       </FormGroup>
       <Button theme="success" type="submit">Login</Button>
      </Form>
        </CardBody>
     {/*    <CardFooter className="border-top">
          <Row>
            <Col>
              <FormSelect
                size="sm"
                value="last-week"
                style={{ maxWidth: "130px" }}
                onChange={() => {}}
              >
                <option value="last-week">Last Week</option>
                <option value="today">Today</option>
                <option value="last-month">Last Month</option>
                <option value="last-year">Last Year</option>
              </FormSelect>
            </Col>
            <Col className="text-right view-report">
              <a href="#">View full report &rarr;</a>
            </Col>
          </Row>
        </CardFooter> */}
      </Card>
      </Container>
    );
  }
}

export default Login;
