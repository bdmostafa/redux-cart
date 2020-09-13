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
            const newItem = {
                productId: action.id, 
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return { ...state, cart: newCart }

        case REMOVE_FROM_CART:
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId)
            return { ...state, cart: remainingCart }
        default:
            return state;
    }
}

export default cartReducers;