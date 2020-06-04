import React from "react";
import swal from 'sweetalert';
import { Container, 
   Card, CardBody, Form,CardHeader,
 FormInput,
  FormGroup,Button } from "shards-react";
import { appConfig } from '../utils';
const { useState } = React;

const Addcontact = (props) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phoneNo, setPhoneNo] = useState();

  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const Url = appConfig.webApi + "/users/saveUsers";
      fetch(Url, { 
        method: 'post',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "password": password,
          "phoneNo": phoneNo,
          "status": "Active"
        })
      }).then(function (response) {
        return response.json();
      }).then(function (responseData) {
        if (responseData.status == "Inavalid details") {
          swal(responseData.status);
        } else {
          console.log(responseData)
          window.location.href="/users";
        }
  
      })
    }
  
   const handleChange=(e)=> {
     if(e.target.name == "firstName"){
        setFirstName(e.target.value)
      }else if(e.target.name == "lastName"){
        setLastName(e.target.value)
      }else if(e.target.name == "email"){
        setEmail(e.target.value)
      }else if(e.target.name == "password"){
        setPassword(e.target.value)
      }else if(e.target.name == "phoneNo"){
        setPhoneNo(e.target.value)
      }
      // obj[e.target.name] = e.target.value;
      // this.setState(obj);
    }
    return (
        <>
         <Container fluid className="main-content-container px-4" style={{marginTop:"1%"}}>
        <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h4 className="m-0">Add User</h4>
        </CardHeader>
        <CardBody>
        <Form style={{ marginTop: "2%"}} onSubmit={handleSubmit}>
        <FormGroup>
       
              <FormInput required onChange={handleChange} name="firstName" placeholder="First Name" />
            </FormGroup>
            <FormGroup>
            <FormInput required onChange={handleChange} name="lastName" placeholder="Lat Name" />
           </FormGroup>
          <FormGroup>
            <FormInput required onChange={handleChange} name="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
          <FormInput required onChange={handleChange} name="password" placeholder="Password" type="password" />
        </FormGroup>
        <FormGroup>
          <FormInput required onChange={handleChange} name="phoneNo" placeholder="Phone No" />
        </FormGroup>
        {/* <FormGroup>
        <FormInput required onChange={handleChange} value="Active" readOnly name="status" placeholder="Status" />
            </FormGroup > */}
     <Button theme="success" type="submit">
          Add
        </Button>
      </Form>
        </CardBody>
        </Card>
      </Container>
       
          </>
);
};    

export default Addcontact;