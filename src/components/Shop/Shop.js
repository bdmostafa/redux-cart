import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        {name: 'Toshiba', id: 1},
        {name: 'Asus', id: 2},
        {name: 'HP', id: 3},
        {name: 'Dell', id: 4},
        {name: 'Doel', id: 5},
    ]
    return (
        <div>
            <h4>this is shop</h4>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Shop;