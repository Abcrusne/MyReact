import React, { Component } from 'react';
import Data from "../data.json";
import ProductCardComponent from "./ProductCardComponent";


var ProductListComponent = function() {
    return (
        <div className="container">
            <div className="row">
                {Data.map((post) => {
                    return (
                        <div className="col-12 col-md-6 col-lg-3 my-3"  key={post.id}>
                            <ProductCardComponent
                                id={post.id}
                                title={post.title}
                                imageUrl= {post.imageUrl}
                                imageUrl={post.imageUrl}
                                description={post.description}
                                price={post.price}
                                quantity={post.quantity}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
  };
export default ProductListComponent;
