import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Administration from './components/Administration';
import ProductListComponent from './components/ProductListComponent';
import SelfDestructTimerComponent from './components/SelfDestructTimerComponent';
import Increasing from './components/IncreasingButtonComponent';
import MovingImg from './components/MovingImg';
import StateHook from './components/StateHook';
import EffectHook from './components/EffectHook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <header className="">
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <ProductListComponent />
                </Route>
                <Route path="/admin">
                  <Administration />
                </Route>
                <Route path="/product/:id">
                  <ProductListComponent />
                </Route>
                <Route path="*">
                  <h4 className="display-1">Not Found 404</h4>
                </Route>
                <Route>
                  <h4 className="display-1">Not Found 404</h4>
                </Route>
              </Switch>
            </div>
          </header>
        </div>
        <main className="container">
          <div className="row"></div>
          <EffectHook />
          <StateHook />
          <SelfDestructTimerComponent />
          <Increasing />
          <Administration />
          <MovingImg />
        </main>
      </div>
    );
  }
}

export default App;
