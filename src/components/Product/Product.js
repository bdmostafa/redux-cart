import React from 'react';

const Product = ({product: { id, name }, addToCart}) => {
    // const {addToCart} = props;
    // const {id, name} = props.product;
    return (
        <div>
            <h5> {id}: {name} </h5>
            <button onClick={() => addToCart(id, name)}>Add to cart</button>
            <hr />
        </div>
    );
};

export default Product;