import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = (props) => {
    console.log(props)
    const {products, addToCart} = props;
    return (
        <div>
            <h4>this is shop</h4>
            {
                products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop);

// connect(mapStateToProps, mapDispatchToProps)(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);