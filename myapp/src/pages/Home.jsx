import axios from 'axios';
import React, { Component } from 'react';
import itemImg from '../img/samsung-big.jpg';
import ProductCard from '../components/ProductCard';

//export const DataContext = React.createContext();

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      // cart: [],
      // total: 0,
      // count: 1,
    };
  }

  componentDidMount() {
    axios
      .get('https://itpro2017.herokuapp.com/api/products')
      .then((products) => {
        this.setState({ products });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { data } = this.state.products;

    
    if (data) {
      return (
        <div className="container mt-4">
          <div className="row d-flex justify-content-center">
            {data.map(({ id, ...otherProps }) => (
              <ProductCard
                key={id}
                id={id}
                itemImg={itemImg}
                {...otherProps}
                // addToCart = {() =>addToCart(data)}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
  // addCart = (id) => {
  //   const { products, cart } = this.state;
  //   const check = cart.every((item) => {
  //     return item._id !== id;
  //   });
  //   if (check) {
  //     const data = products.filter((product) => {
  //       return product._id === id;
  //     });
  //     this.setState({ cart: [...cart, ...data] });
  //   } else {
  //     alert('The product has been added to cart.');
  //   }
  // };

  // reduction = (id) => {
  //   const { cart } = this.state;
  //   cart.forEach((item) => {
  //     if (item._id === id) {
  //       item.count === 1 ? (item.count = 1) : (item.count -= 1);
  //     }
  //   });
  //   this.setState({ cart: cart });
  //   this.getTotal();
  // };

  // increase = (id) => {
  //   const { cart } = this.state;
  //   cart.forEach((item) => {
  //     if (item._id === id) {
  //       item.count += 1;
  //     }
  //   });
  //   this.setState({ cart: cart });
  //   this.getTotal();
  // };

  // removeProduct = (id) => {
  //   if (window.confirm('Do you want to delete this product?')) {
  //     const { cart } = this.state;
  //     cart.forEach((item, index) => {
  //       if (item._id === id) {
  //         cart.splice(index, 1);
  //       }
  //     });
  //     this.setState({ cart: cart });
  //     this.getTotal();
  //   }
  // };

  // getTotal = () => {
  //   const { cart } = this.state;
  //   const res = cart.reduce((prev, item) => {
  //     return prev + item.price * item.count;
  //   }, 0);
  //   this.setState({ total: res });
  // };
  // //componentDidUpdate() {}


    // const { cart } = this.state.cart;
    // const { total } = this.state.total;
    // const { count } = this.state.count;
    // const { addCart, reduction, increase, removeProduct, getTotal } = this;
    // console.log(products);
    // const addToCart = (product) => {
    //   let newCart = [...cart];
    //   let itemInCart = newCart.find(
    //     (item) => product.name === item.name
    //   );
    //   if (itemInCart) {
    //     itemInCart.quantity++;
    //   } else {
    //     itemInCart = {
    //       ...product,
    //       quantity: 1,
    //     };
    //     newCart.push(itemInCart);
    //   }
    //   setCart(newCart);
    // };


//   <DataContext.Provider
//     value={{
//       products,
//       addCart,
//       count,
//       cart,
//       reduction,
//       increase,
//       removeProduct,
//       total,
//       getTotal
//     }}
//   >
//     {this.props.children}
//   </DataContext.Provider>
