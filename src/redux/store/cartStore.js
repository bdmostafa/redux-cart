const { createStore } = require("redux");
const { default: cartReducers } = require("../reducers/cartReducer");

export const store = createStore(cartReducers);