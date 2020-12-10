import React, { useState } from 'react';

export default function StateHook() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={decrementCount}>
        -
      </button>
      <span> {count}</span>
      <button className="btn btn-primary" onClick={incrementCount}>
        +
      </button>
    </div>
  );
}
