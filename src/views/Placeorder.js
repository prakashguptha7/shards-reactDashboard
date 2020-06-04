import React from "react";
import swal from "sweetalert";
import {
  Container,
  Card,
  CardBody,
  Form,
  CardHeader,
  FormInput,
  FormGroup,
  Button
} from "shards-react";
import { appConfig } from "../utils";
import { userDetails } from "../utils";


class Placeorder extends React.Component {
  state = {
    // customerId:"",
    // productId:"",
    // quantity:"",
    // price:"",
    rows: [{}],
    // currentRow: {}
  };
  handleChange = idx => e => {
    const { name, value } = e.target;
    
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });

    // this.setState(
    //         {
    //           currentRow: {
    //             ...this.state.currentRow,
    //             [name]: value
    //           }
    //         },
    //         () => console.log("currentRow", this.state.currentRow)
    //       );
    console.log("rows",rows);
  };
  handleAddRow = () => {
    const item = {
            customerId: "",
            productId: "",
            quantity: "",
            price: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
     
    });
    
    
  };

  handleSubmit = event => {
        event.preventDefault();
        const Url = appConfig.webApi + "/placeOrder/addPlaceOrders";
        // console.log("this.state.rows", this.state.currentRow[0].productId);
    
        fetch(Url, {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({
            userId: userDetails().id,
            customerId: this.state.currentRow.customerId,
            orders: [
              {
                productId: this.state.currentRow.productId,
                quantity: this.state.currentRow.quantity,
                price: this.state.currentRow.price
              }
            ]
          })
        })
      };

  render() {
    return (
      <Container
              fluid
              className="main-content-container px-4"
              style={{ marginTop: "1%" }}
            >
              <Card small className="h-100">
                <CardHeader className="border-bottom">
                  <h4 className="m-0">Place Orders</h4>
                </CardHeader>
                <CardBody>
                  <div className="row clearfix">
                    <div className="col-md-12 column">
                      <table
                        className="table table-bordered table-hover"
                        id="tab_logic"
                      >
                        <thead>
                          <tr>
                            <th className="text-center"> Custome Id </th>
                            <th className="text-center"> Product Id </th>
                            <th className="text-center"> Quantity </th>
                            <th className="text-center"> Price </th>
                          </tr>
                        </thead>
                        <tbody>
                          {console.log("state", this.state.rows)}
                          {this.state.rows.map((item, idx) => (
                            <tr id="addr0" key={idx}>
                              <td>
                                <input
                                  type="text"
                                  name="customerId"
                                  value={this.state.rows.customerId}
                                  onChange={this.handleChange(idx)}
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  name="productId"
                                  value={this.state.rows.productId}
                                  onChange={this.handleChange(idx)}
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  name="quantity"
                                  value={this.state.rows.quantity}
                                  onChange={this.handleChange(idx)}
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  name="price"
                                  value={this.state.rows.price}
                                  onChange={this.handleChange(idx)}
                                  className="form-control"
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <button onClick={this.handleAddRow} className="btn btn-primary">
                        Add Row
                      </button>
                      <Button
                        theme="success"
                        onClick={this.handleSubmit}
                        className="float-right"
                      >
                        Place Order
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Container>
    );
  }
}

export default Placeorder;
