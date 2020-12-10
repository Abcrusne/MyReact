import React from 'react';
import axios from 'axios';
import itemImg from '../img/samsung-small.jpg';
import { Link } from 'react-router-dom';

class AdminForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      // id: '',
      // title: '',
      // description: '',
      // price: '',
      // quantity: '',

      // submited: {
      //   id: '',
      //   title: '',
      //   description: '',
      //   price: '',
      //   quantity: '',
      // },
    };
  }

  componentDidMount() {
    axios
      .get('https://itpro2017.herokuapp.com/api/products')
      .then((products) => {
        this.setState({ products });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     submited: {
  //       id: this.state.id,
  //       title: this.state.title,
  //       description: this.state.description,
  //       price: this.state.price,
  //       quantity: this.state.quantity,
  //     },
  //   });
  // };
  // handleChange = (event) => {
  //   let form = event.target.name;
  //   let val = event.target.value;
  //   this.setState({ [form]: val });
  // };
  render() {
    const { data } = this.state.products;
    if (data) {
      return (
        <div className="container ">
          <div className="row">
            <p className=" p-3 text-center text-white">
              <Link to={'/create'}>
                <button className="btn btn-dark float-right">
                  Add new product
                </button>
              </Link>
            </p>
            <div className="col col-sm-12 col-md-10 col-lg-8">
              <div></div>
              {data.map((item) => {
                return (
                  <div key={item.id} className="container mb-3">
                    <div className="row">
                      <div className="col-12 col-md-2">
                        <img src={itemImg} alt={item.title} />
                      </div>
                      <div className="col-10 col-md-8">
                        <h5>{item.title}</h5>
                        <p>Description: {item.description} </p>
                        <p>Price: {item.price}</p>
                      </div>
                      <div className="col-2 col-md-2">
                        <Link to={`/admin/${item.id}`}>
                          <button className="btn btn-dark">Edit</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

{
  /* <form onSubmit={this.handleSubmit}>
          <h6>
            Product administration form, please fill all fields and confirm
          </h6>
          <p>Enter id:</p>
          <input type="number" name="id" onChange={this.handleChange} />
          <p>Enter title:</p>
          <input type="text" name="title" onChange={this.handleChange} />
          <p>Enter description:</p>
          <input type="text" name="description" onChange={this.handleChange} />
          <p>Enter price:</p>
          <input type="number" name="price" onChange={this.handleChange} />
          <p>Enter quantity:</p>
          <input type="number" name="quantity" onChange={this.handleChange} />
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
} */
}
export default AdminForm;
