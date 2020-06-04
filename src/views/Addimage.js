import React from "react";
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  Button
} from "shards-react";
import { appConfig } from "../utils";
class Addimage extends React.Component {
  constructor() {
    super();
    this.state = {
      imgUploader: '',
      
    }
  }
 
  handleFileChange = e => {
    this.setState({
      [e.target.name]: e.target.files[0],
    })
  }
  
  handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    for (let name in this.state) {
      formData.append(name, this.state[name]);
    }
    const Id = this.props.match.params.productId;
    const Url = appConfig.webApi + `/productImage/upload/${Id}`;
    await fetch(Url, {
      method: 'POST',
      body: formData,
    });
    window.location.href = "/products";
    console.log(this.state.imgUploader);
    alert('Image Uploaded Successfully');
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4" style={{marginTop:"5%", marginBottom:"5%", width:'40%'}}>
             <Card small className="h-100">
             <CardHeader className="border-bottom">
              <h4 className="m-0">Add Image</h4>
              </CardHeader>
            <CardBody>
              <form onSubmit={this.handleSubmit}>
                <input 
                  name="imgUploader" 
                  type="file"
                  onChange={this.handleFileChange}>
                </input>
                <Button theme="success" type="submit"><b>Upload</b></Button>
              </form>
          </CardBody>
       </Card>
      </Container>
    )
  }
}

export default Addimage;

