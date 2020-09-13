const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions");

const initialState = {
    cart: [],
    products: [
        {name: 'Toshiba', id: 1},
        {name: 'Asus', id: 2},
        {name: 'HP', id: 3},
        {name: 'Dell', id: 4},
        {name: 'Doel', id: 5},
    ]
}

const cartReducers = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            // const newId = action.id;
            // const newCart = [...state.cart, newId];
            // return {cart: newCart}
            return {
                products: state.products,
                cart: [...state.cart, action.id]
            }
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item !== id)
            return { cart: remainingCart }
        default:
            return state;
    }
}

export default cartReducers;