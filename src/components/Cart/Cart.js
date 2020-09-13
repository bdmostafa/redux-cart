import React from 'react';
import { removeFromCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            <h3>this is cart</h3>   
            {
                cart.map(id => <li key={id}> Product {id} is added <button onClick={() => removeFromCart(id)}>Remove</button> </li>)
            }
        </div>
    );
};


const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

