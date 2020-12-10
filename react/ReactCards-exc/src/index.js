import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Switch, Redirect, Route } from "react-router";
import { BrowserRouter, Link } from 'react-router-dom';

var NoMatch = (props) => {
  var goApp = () => props.history.push('/');
  return (
    <div>
      Route did not match
      <button onClick={goApp}>Go Home</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  // <Navbar>
  //   <Switch>
  //     <Route exact path="/" component={App} />
  //     <Route path="/products/:id" component={Products} />
  //     <Route path="/products" component={Products} />
  //     <Route path="*" component={NoMatch} />
  //     <Route component={NoMatch} />
  //   </Switch>
  // </Navbar>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
