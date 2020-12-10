import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apple from '../IMG/apple.jpg';
import orange from '../IMG/orange.jpg';
import ct from '../IMG/chair_table.jpg';

var img = '';

export default class ProductCardComponent extends Component {
  constructor(props) {
    super(props);
    if (props.imageUrl === 'apple') {
      img = apple;
    } else if (props.imageUrl === 'orange') {
      img = orange;
    } else if (props.imageUrl === 'ct') {
      img = ct;
    } else {
      img = ct;
    }

    this.state = { title: props.title, img: img };
    console.log('konstruktorius: ' + this.state.title);
  }
  componentWillMount() {
    console.log('Compnent will mount.');
  }
  componentDidMount() {
    console.log('component did mount: ' + this.state.title);
    this.setState({ title: this.state.title + '*' });
  }
  componentWillReceiveProps(nextProps) {
    console.log('Component will receive props', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should Component update', nextProps, nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component will update', nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update', prevProps, prevState);
  }
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    console.log('render: ' + this.state.title);
    const { title, imageUrl, description, price, quantity } = this.props;
    return (
      <main>
        <div className="card">
          <img src={this.state.img} className="card-img-top" alt="image " />
          <div className="card-body">
            <h5 className="card-title"> Title: {this.props.title}</h5>
            <p className="card-text"> Description: {this.props.description}</p>
            <p className="card-price"> Price: {this.props.price} EUR</p>
            <p>
              <button className="btn btn-primary" role="button">
                Details
              </button>
            </p>
          </div>
        </div>
      </main>
    );
  }
}
ProductCardComponent.propTypes = {
  // id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
