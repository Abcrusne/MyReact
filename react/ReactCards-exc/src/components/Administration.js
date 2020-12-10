import React from "react";

class Administration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      description: "",
      price: "",
      quantity: "",
      description: "",

      submited: {
        id: "",
        title: "",
        description: "",
        price: "",
        quantity: "",
        description: "",
      },
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submited: {
        id: this.state.id,
        title: this.state.title,
        description: this.state.description,
        price: this.state.price,
        quantity: this.state.quantity,
      },
    });
  };
  handleChange = (event) => {
  
      let form = event.target.name;
      let val = event.target.value;
      this.setState({ [form]: val });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h6>Product administration form, please fill all fields and confirm</h6>
          <p>Enter id:</p>
          <input type="number" name="id" onChange={this.handleChange} />
          <p>Enter title:</p>
          <input type="text" name="title" onChange={this.handleChange} />
          <p>Enter description:</p>
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
          />
          <p>Enter price:</p>
          <input type="number" name="price" onChange={this.handleChange} />
          <p>Enter quantity:</p>
          <input
            type="number"
            name="quantity"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" />
        </form>
        <p>ID: {this.state.submited.id}</p>
        <p>Title: {this.state.submited.title}</p>
        <p>Description: {this.state.submited.description}</p>
        <p>Price: {this.state.submited.price}</p>
        <p>Quantity: {this.state.submited.quantity}</p>
      </>
    );
  }
}
export default Administration;
