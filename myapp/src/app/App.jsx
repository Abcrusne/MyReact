import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AboutProduct from '../pages/AboutProduct';
import AdminCreateNewProduct from '../pages/AdminCreateNewProduct';
import AdminForm from '../pages/AdminForm';
import AdminProductUpdate from '../pages/AdminProductUpdate';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import { UserContext } from '../context/Context';
//import { DataContext } from '../pages/Home';

class App extends Component {
  state = {
    user: '',
    count: 0,
  };
  ogIn = (name) => {
    this.setState({ user: name });
  };

  logOut = () => {
    this.setState({ user: '' });
  };

  setCount = (event) => {
    this.setState({ count: event });
  };
  render() {
    document.title = 'e-Shop ';
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          count: this.state.count,
          setCount: this.setCount,
          logIn: this.logIn,
          logOut: this.logOut,
        }}
      >
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={AdminForm} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={AboutProduct} />
            <Route path="/admin/:id">
              <AdminProductUpdate />
            </Route>
            <Route path="/create">
              <AdminCreateNewProduct />
            </Route>
            <Route path="*">
              <h2>No Found 404</h2>
            </Route>
            <Route>
              <h2>No Found 404</h2>
            </Route>
            {/* <Route path="/payment" component={Payment} exact /> */}
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    );
  }
}
export default App;
