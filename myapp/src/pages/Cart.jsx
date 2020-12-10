import React, { useEffect, useState, useContext, useHistory } from 'react';
import { Link } from 'react-router-dom';
//import { DataContext } from '../pages/Home';
import itemImg from '../img/samsung-big.jpg';
import axios from 'axios';
import { UserContext } from '../context/Context';
import Delete from '../components/Delete';
//import ProductCardCart from '../components/ProductCardCart';

const Cart = () => {
  const [cart, setCart] = useState();
  const { user, setQuantityInCart } = useContext(UserContext);
  const history = useHistory();

  useEffect(async () => {
    const result = await axios.get(
      `https://itpro2017.herokuapp.com/api/users/${user}/cart-products`
    );
    setCart(result);
    setQuantityInCart(result.data.length);
  }, []);

  const deletItemFromCart = (productId) => {
    axios.delete(
      `https://itpro2017.herokuapp.com/api/users/${user}/cart-products/${productId}`
    );
    history.push('/');
  };

  if (cart) {
    return (
      <div className="container ">
        <div className="row">
          <div className="col col-sm-12 col-md-10 col-lg-8">
            <div>
              <h4 className="bg-dark p-3 text-center text-white">
                Cart{' '}
                <Link to={'/'}>
                  <button className="btn btn-light float-right">Back</button>
                </Link>
              </h4>
            </div>
            {cart.data.length > 0 ? (
              cart.data.map((item) => {
                return (
                  <div key={item.id} className="container mb-3">
                    <div className="row">
                      <div className="col-12 col-md-2">
                        <img src={itemImg} alt={item.title} />
                      </div>
                      <div className="col-10 col-md-8">
                        <h5>{item.title}</h5>
                      </div>
                      <div className="col-12 col-md-2">
                        <Delete
                          item={item}
                          deletItemFromCart={deletItemFromCart}
                        >
                          Are you sure you want to remove {item.title} from
                          cart?
                        </Delete>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h4>Your cart is empty.</h4>
            )}
          </div>
        </div>
      </div>
    );
  } else if (!user) {
    return <h4>Jums reikia prisijungti </h4>;
  } else {
    return <h2>Loading...</h2>;
  }
};
export default Cart;
// const Cart = (id, itemImg, ...otherProps) => {
//   console.log('My cart: ', id);

//   const [cart, setCart] = useState([]);
//   return (
//     <div>
//       <h2>Cart</h2>
//       <div className="container mt-4">
//           <div className="row d-flex justify-content-center">
//             {cart.map(({ id, ...otherProps }) => (
//               <ProductCardCart key={id} id={id} itemImg={itemImg} {...otherProps} />
//             ))}
//           </div>
//         </div>
//     </div>
//   );
// };
// function Cart({ cart, setCart }) {
//   const getTotalSum = () => {
//     return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const setQuantity = (product, amount) => {
//     const newCart = [...cart];
//     newCart.find((item) => item.name === product.name).quantity = amount;
//     setCart(newCart);
//   };

//   const removeFromCart = (productToRemove) => {
//     setCart(cart.filter((product) => product !== productToRemove));
//   };

//   return (
//     <>
//       <h1>Cart</h1>
//       {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
//       <div className="products">
//         {cart.map((product, id) => (
//           <div className="product" key={id}>
//             <h3>{product.title}</h3>
//             <h4>${product.price}</h4>
//             <input
//               value={product.quantity}
//               onChange={(e) => setQuantity(product, parseInt(e.target.value))}
//             />
//             <img src={product.image} alt={product.title} />
//             <button onClick={() => removeFromCart(product)}>Remove</button>
//           </div>
//         ))}
//       </div>

//       <div>Total Cost: ${getTotalSum()}</div>
//     </>
//   );
// }
// export class Cart extends Component {

//   static contextType = DataContext;

//   componentDidMount() {
//     this.context.getTotal();
//   }

//   render() {
//     const {
//       cart,
//       increase,
//       reduction,
//       removeProduct,
//       total,
//       count,
//     } = this.context;
//     if (cart.length === 0) {
//       return <h2 style={{ textAlign: 'center' }}>Nothings Product</h2>;
//     } else {
//       return (
//         <>
//           {cart.map((item) => (
//             <div className="" key={item.id}>
//               <img src={itemImg} alt={item.title} />
//               <div className="container">
//                 <div className="row">
//                   <h2>{item.title}</h2>
//                   <span>${item.price * count}</span>
//                 </div>

//                 <p>{item.description}</p>

//                 <div className="">
//                   <button
//                     className="btn btn-dark"
//                     onClick={() => reduction(item.id)}
//                   >
//                     -
//                   </button>
//                   <span>{count}</span>
//                   <button
//                     className="btn btn-dark"
//                     onClick={() => increase(item.id)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <div
//                 className="btn btn-warning"
//                 onClick={() => removeProduct(item.id)}
//               >
//                 X
//               </div>
//             </div>
//           ))}
//           <div className="">
//             <Link to="/payment">Payment</Link>
//             <h3>Total: ${total}</h3>
//           </div>
//         </>
//       );
//     }
//   }
// }
