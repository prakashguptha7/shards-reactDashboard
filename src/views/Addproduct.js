import React from "react";
import {
  Container,
  Card,
  CardBody,
  Row,Col,
  CardHeader,
  Form,
  FormInput,
  FormGroup,
  Button
} from "shards-react";
import swal from 'sweetalert';
import { appConfig } from "../utils";
// import { Row } from "react-grid-system";
const { useState } = React;

const Addproduct = props => {
  // const [productId, setProductId] = useState();
  const [productName, setProductName] = useState();
  const [brand, setBrand] = useState();
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [type, setType] = useState();
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  // const [status, setStatus] = useState();
  const [price, setPrice] = useState();
  //  const [image, setImage] = useState();
  const [categoryId, setCategoryId] = useState();


 
  const handleSubmit = event => {
    event.preventDefault();
    const Url = appConfig.webApi + "/products/addProducts";
    fetch(Url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        productName: productName,
        brand: brand,
        color: color,
        size: size,
        type: type,
        height: height,
        width: width,
        status: "Active",
        price:price,
        categoryId: categoryId
      })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(responseData) {
        if (responseData.status == "Product added successfully") {
          swal(responseData.status);
        }
        else {
          swal(responseData.status);
        }
      });
  };

  const handleChange = e => {
    if (e.target.name == "productName") {
      setProductName(e.target.value);
    } else if (e.target.name == "brand") {
      setBrand(e.target.value);
    } else if (e.target.name == "color") {
      setColor(e.target.value);
    } else if (e.target.name == "size") {
      setSize(e.target.value);
    } else if (e.target.name == "type") {
      setType(e.target.value);
    } else if (e.target.name == "height") {
      setHeight(e.target.value);
    } else if (e.target.name == "width") {
      setWidth(e.target.value);
    } else if (e.target.name == "price") {
      setPrice(e.target.value);
    } else if (e.target.name == "categoryId") {
      setCategoryId(e.target.value);
    }
  };
  return (
    <>
     <Container fluid className="main-content-container px-4" style={{marginTop:"2%"}}>
        <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h4 className="m-0">Add Product</h4>
        </CardHeader>
        <CardBody>
        <Form style={{ marginTop: "2%"}} onSubmit={handleSubmit}>
        <Container className="dr-example-container">
          <Row>
          <Col sm="12" lg="6">
     <FormGroup>
       <FormInput
         required
         onChange={handleChange}
         name="productName"
         placeholder="Product Name"
       />
     </FormGroup>
     <FormGroup>
       <FormInput
         required
         onChange={handleChange}
         name="brand"
         placeholder="Brand"
       />
     </FormGroup>
     <FormGroup>
       <FormInput
         required
         onChange={handleChange}
         name="color"
         placeholder="Color"
       />
     </FormGroup>
     <FormGroup>
       <FormInput
         required
         onChange={handleChange}
         name="size"
         placeholder="Size"
       />
     </FormGroup>
     <FormGroup>
       <FormInput
         required
         onChange={handleChange}
         name="type"
         placeholder="Type"
       />
     </FormGroup>
     </Col>
     <Col sm="12" lg="6">
     <FormGroup>
       <FormInput
         required
         onChange={handleChange}
         name="height"
         placeholder="Height"
       />
     </FormGroup>
     <FormGroup>
       <FormInput
         required
         onChange={handleChange}
         name="width"
         placeholder="Width"
       />
     </FormGroup>
     {/* <FormGroup>
       <FormInput
         required
         onChange={handleChange}
        value="Active"
        readOnly
         name="status"
         placeholder="Status"
       />
     </FormGroup> */}
     <FormGroup>
       <FormInput
         required
         onChange={handleChange}
         name="price"
         placeholder="Price"
       />
     </FormGroup>
     <FormGroup>
       <FormInput
         required
         onChange={handleChange}
         name="categoryId"
         placeholder="Catogery Id"
       />
     </FormGroup>
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

export default Addproduct;
