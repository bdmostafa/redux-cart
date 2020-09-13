import React from 'react';

const Product = (props) => {
    const { id, name } = props.product
    return (
        <div>
            <h5> {id}: {name} </h5>
            <button>Add to cart</button>
            <hr />
        </div>
    );
};

export default Product;