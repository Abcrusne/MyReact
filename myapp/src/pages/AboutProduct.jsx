import React, { useEffect, useState, useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import itemImg from '../img/samsung-big.jpg';
import { UserContext } from '../context/Context';
//import Alerts from '../components/alerts/Alerts';

const AboutProduct = () => {
  const [product, setProduct] = useState({});
  const [alert, setAlert] = useState(false);
  const match = useRouteMatch();
  const { user } = useContext(UserContext);

  useEffect(async () => {
    const result = await axios.get(
      `https://itpro2017.herokuapp.com/api/products/${match.params.id}`
    );
    setProduct(result);
  }, []);

  const addToCart = (product) => {
    const { id, image, title } = product;
    axios.post(
      `https://itpro2017.herokuapp.com/api/users/${user}/cart-products`,
      { id, image, title }
    );
    setAlert(true);
    setTimeout(() => setAlert(false), 1000);
  };

  if (product.data?.id) {
    const { description, price, quantity, title } = product.data;
    return (
      <div className="container position-relative mt-5">
        <div className="row">
          <div
            className="card text-center m-auto p-3"
            style={{ width: '22rem' }}
          >
            <img src={itemImg} className="card-img-top" alt="..."></img>
            <div className="card-header">Title: {title}</div>
            <div className="card-body">
              <h5 className="card-title">Description: {description}</h5>

              <h5 className="card-text">Price: {price}</h5>
              <h5 className="card-text">Quantity: {quantity}</h5>

              <Link to="/" className="btn btn-dark mr-3">
                Go back
              </Link>
              <button
                className="btn btn-success"
                onClick={() => addToCart(product.data)}
                disabled={!user}
              >
                Add to cart
              </button>
            </div>
            <div className="card-footer text-muted">
              {!user && (
                <div className="bg-warning text-white p-2 rounded">Log in</div>
              )}
            </div>
          </div>
        </div>
        <div className="alert alert-primary" role="alert">
          <p> Yours {title} was added to cart</p>
        </div>
        {/* {alert && (
          <Alerts className=" alert"> {title} was added to cart</Alerts>
        )} */}
      </div>
    );
  } else {
    return <div>Waiting..</div>;
  }
};

export default AboutProduct;
