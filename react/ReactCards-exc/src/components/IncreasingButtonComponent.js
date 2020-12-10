import React, { Component } from 'react';

export default class IncreasingButtonComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleClick = (event) => {
    event.preventDefault(); // event.stopPropagation();
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        {this.state.count} &nbsp;
        <button className="btn btn-dark" onClick={this.handleClick}>
          {/* iskvieciama taip funkcija */}
          Increase
        </button>
      </div>
    );
  }
}
//  const IncreasingButtonComponent = () => {
//   const [count, setCount] = useState(0);
//   handleClick = (event) => {
//     event.preventDefault(); // event.stopPropagation();
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       {count} &nbsp;
//       <button className="btn btn-default" onClick={handleClick}>
//         Increase
//       </button>
//     </div>
//   );
// };
// export default IncreasingButtonComponent;
