import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../pages/Home';
import itemImg from '../img/samsung-big.jpg';

const ProductCard = ({ id, itemImg, ...otherProps }) => {
  console.log('Product Card: ', id);
  const { title, description, price, quantity } = otherProps;
  //   const [cart, setCart] = useState([]);
  //   //const [page, setPage] = useState('products');

  //   const addToCart = (prod) => {
  //     console.log('we are in add to cart');
  //     setCart([...cart, { ...prod }]);
  //   };

  return (
    <div
      className="card col-12 col-md-6 col-lg-4 my-3"
      //   style={{ width: '18 rem' }}
    >
      {/* jeigu butu image duotas  reiketu rasyti prie <img src = {otherProps.image}/>*/}
      <img src={itemImg} className="card-img-top" alt={otherProps.title} />
      <div className="card-body ">
        <h5 className="card-title">Title: {otherProps.title}</h5>
        {/* <p className="card-text">Description: {otherProps.description}</p> */}
        <p className="card-price">Price: {otherProps.price} EUR</p>
        <p className="card-quantity">
          Quantity in Stock:{' '}
          {otherProps.quantity <= 0 ? 'Out of stock' : 'In stock'}{' '}
        </p>
        <Link to={`/product/${id}`} className="btn btn-dark">
          More info
        </Link>
        <p>
          {/* <button
            className="btn btn-dark"
            onClick={() => addToCart(otherProps)}
          >
            Add to cart
          </button> */}
        </p>
      </div>
    </div>
  );
};

// class ProductCard extends Component {

//   //static contextType = DataContext;

//   render() {
//     const { products, addCart } = this.context;
//     return (
//       <div>
//         {products.map((product) => (
//           <div className="card" key={product.id}>
//             <Link to={`/product/${product.id}`}>
//               <img src={itemImg} className="card-img-top" alt={product.title} />
//             </Link>
//             <div className="content">
//               <h3>
//                 <Link to={`/product/${product._id}`}>{product.title}</Link>
//               </h3>
//               <span>${product.price}</span>
//               <p>{product.description}</p>
//               <button onClick={() => addCart(product.id)}>Add to cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

export default ProductCard;
