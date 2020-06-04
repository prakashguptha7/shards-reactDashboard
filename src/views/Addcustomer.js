import React from "react";
import { Container,
   Card, CardBody, Form,Row,Col,
 FormInput,CardHeader,FormSelect,
  FormGroup,Button } from "shards-react";
import { appConfig } from '../utils';
import {userDetails} from '../utils';
import swal from 'sweetalert';
const { useState } = React;


const Addcontact = (props) => {
    
    // const [userId, setUserId] = useState();
    const [customerName, setCustomerName] = useState();
    const [customerCode, setCustomerCode] = useState();
    const [address1, setAddress1] = useState();
    const [adderss2, setAdderss2] = useState();
    const [pinCode, setPinCode] = useState();
    const [city, setCity] = useState();
    const [email, setEmail] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [gstNo, setGstNo] = useState();
    // const [status, setStatus] = useState();
  
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const Url = appConfig.webApi + "/customers/addCustomer";
      fetch(Url, {
        method: 'post',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            "userId":userDetails().id,
          "customerName": customerName,
          "customerCode": customerCode,
          "address1": address1,
          "adderss2": adderss2,
          "pinCode": pinCode,
          "city": city,
          "email": email,
          "phoneNo": phoneNo,
          "gstNo": gstNo,
          "status": "Active"
        })
      }).then(function (response) {
        return response.json();
      }).then(function (responseData) {
        if (responseData.status == "Sql Error") {
          swal(responseData.status);
        } else {
          console.log(responseData)
          window.location.href="/customers";
          // localStorage.setItem("userData",JSON.stringify(responseData));
          //  window.location.href="/dashboard";
        }
  
      })
    }
  
   const handleChange=(e)=> {
      if(e.target.name == "customerName"){
        setCustomerName(e.target.value)
      }else if(e.target.name == "customerCode"){
        setCustomerCode(e.target.value)
      }else if(e.target.name == "address1"){
        setAddress1(e.target.value)
      }else if(e.target.name == "adderss2"){
        setAdderss2(e.target.value)
      }else if(e.target.name == "pinCode"){
        setPinCode(e.target.value)
      }else if(e.target.name == "city"){
        setCity(e.target.value)
      }else if(e.target.name == "email"){
        setEmail(e.target.value)
      }else if(e.target.name == "phoneNo"){
        setPhoneNo(e.target.value)
      }else if(e.target.name == "gstNo"){
        setGstNo(e.target.value)
      }
    }
    return (
        <>
        <Container fluid className="main-content-container px-4" style={{marginTop:"2%"}}> 
        <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h4 className="m-0">Add Customer</h4>
        </CardHeader>
        <CardBody>
       
        <Form style={{ marginTop: "2%"}} onSubmit={handleSubmit}>
        <Container className="dr-example-container">
        <Row>
          <Col sm="12" lg="6">
          {/* <FormGroup>
            <FormInput required onChange={handleChange} name="userId" value={userDetails().id} />
            </FormGroup> */}
            <FormGroup>
            <FormInput required onChange={handleChange} name="customerCode" placeholder="Customer Code" />
          
            </FormGroup>
            <FormGroup>
            <FormInput required onChange={handleChange} name="city" placeholder="City" />
           </FormGroup>
          <FormGroup>
            <FormInput required onChange={handleChange} name="address1" placeholder="Address1" />
          </FormGroup>
          <FormGroup>
          <FormInput required onChange={handleChange} name="adderss2" placeholder="Address 2" />
        </FormGroup>
        {/* <FormGroup>
          <FormInput required onChange={handleChange} name="status" value="Active" readOnly placeholder="Status" />
        </FormGroup> */}
          </Col>
          <Col sm="12" lg="6">
          <FormGroup>
          <FormInput required onChange={handleChange} name="customerName" placeholder="Customer Name" />
            </FormGroup >
            <FormGroup>
            <FormInput required onChange={handleChange} name="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
          <FormInput required onChange={handleChange} name="phoneNo" placeholder="Phone No" />
        </FormGroup>
        <FormGroup>
          <FormInput required onChange={handleChange} name="gstNo" placeholder="GST No" />
        </FormGroup>
        <FormGroup>
        <FormInput required onChange={handleChange} name="pinCode" placeholder="PinCode" />
            </FormGroup >
          </Col>
        </Row>   
        </Container>
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