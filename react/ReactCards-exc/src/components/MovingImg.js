// import logo2 from './logo-og.png';
//import logo from '../IMG/apple.jpg';
import logo from '../IMG/logo-og.png';
import React from 'react';

function HoverImg() {
  function over(event) {
    event.target.className = 'App-logo';
  }
  function out(event) {
    event.target.className = '';
  }
  return (
    <div>
      <img
        src={logo}
        alt="logo"
        onMouseOver={over}
        onMouseOut={out}
        style={{ height: 70 }}
      />
    </div>
  );
}
export default function MovingImg() {
  return (
    <div>
      <HoverImg />
    </div>
  );
}
