//import { render } from '@testing-library/react';
import React, { Component, useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/Context';
//import { DataContext } from '../pages/Home';

// export class NavBar extends Component {
//   // static contextType = DataContext;

//   render() {
//     // const { cart } = this.context;
const NavBar = () => {
  let { user, logIn, logOut, quantityProductInCart } = useContext(UserContext);
  const [name, setName] = useState('');

  const addUser = (e) => {
    e.preventDefault();

    setName('');
    // logIn(name);
    getUserCart();
  };

  const getUserCart = async () => {
    const result = await axios.get(
      `https://itpro2017.herokuapp.com/api/users/${name}/cart-products`
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Home
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/admin">
              Admin
            </NavLink>
          </li>
        </ul>
        {user ? (
          <form onSubmit={addUser} className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="User"
            />
            <button
              className="btn btn-outline-warning my-2 my-sm-0"
              type="submit"
            >
              Prisijungti
            </button>
          </form>
        ) : (
          <>
            {user}
            <button
              className="ml-3 btn btn-outline-warning my-2 my-sm-0"
              onClick={logOut}
            >
              Log out
            </button>
          </>
        )}

        <ul className="navbar-nav mr-auto">
          <li className="  nav-item">
            <NavLink className="nav-link" to="/cart">
              Items
              {quantityProductInCart}
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="User"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            User
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
