import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex-sm-row">
      <div className=" flex-sm-row collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" id="navbarNav" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link text-dark" to="/admin">
              Admin
            </NavLink>
          </li>
        </ul>
        <li className="nav-item active">
            <NavLink className="nav-link text-dark" to="/products">
              Products
            </NavLink>
          </li>
          <div className="cart-icon nav-item">
            <NavLink className="nav-link" to="/cart">
              <span className="text-dark mx-2 ">0 items</span>
            </NavLink>
          </div>
        </div>
     
    </nav>
  );
};
export default Navbar;

// export default function Navbar() {
//   return (
//     <div>
//       <header>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item active">
//                 <Link to="/" className="nav-link">
//                   Home <span className="sr-only">(current)</span>
//                 </Link>
//               </li>
//               <li className="nav-item active">
//                 <Link to="/" className="nav-link">
//                   Home <span className="sr-only">(current)</span>
//                 </Link>
//               </li>
//               <li className="nav-item active">
//                 <Link to="/" className="nav-link">
//                   Home <span className="sr-only">(current)</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//           </header>

//     </div>
//   );
// }

// var AppContainer = (props) =>
// { return (<div>  <div>
// <Linkto='/' > Home</Link > |& nbsp;
// <Linkto='/products' > Products</Link > |& nbsp;
// <Linkto={`/products/${127}`}>Product by no</Link> |& nbsp;
// <Linkto='/help' > help</Link > |& nbsp;
// <Linkto='/non-existant' > Non Existant</Link >
//  </div > { props.children } </div >); };
