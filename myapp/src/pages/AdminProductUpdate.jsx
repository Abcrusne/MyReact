import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class AdminProductUpdatePage extends Component {
  state = {
    item: {
      description: '',
      image: '',
      price: 0,
      quantity: 0,
      title: '',
    },
  };
  componentDidMount = () => {
    axios
      .get(
        `https://itpro2017.herokuapp.com/api/products/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({ item: response.data });
      })
      .catch((error) => console.log(error));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      item: { ...prevState.item, [name]: value },
    }));
  };

  updateProduct = (e) => {
    e.preventDefault();

    axios
      .put(
        `https://itpro2017.herokuapp.com/api/products/${this.props.match.params.id}`,
        this.state.item
      )
      .then((response) => {
        console.log('Item was updated');
        this.props.history.push('/');
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { title, image, description, price, quantity } = this.state.item;

    return (
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-8">
            <form onSubmit={this.updateProduct}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  name="image"
                  value={image}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="price"
                  value={price}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Quantity</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="quantity"
                  value={quantity}
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminProductUpdatePage);
