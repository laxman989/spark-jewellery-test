import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/UserReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productsReducer } from "./reducers/ProductReducer";

const rootReducer = combineReducers({
    productsReducer: productsReducer,
    productDetailsReducer: productDetailsReducer,
    userReducer: userReducer,
    profileReducer: profileReducer,
    forgotPasswordReducer: forgotPasswordReducer,
})

let initialState = {
    cartReducer: {
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        shippingInfo: localStorage.getItem("shippingInfo") ? JSON.parse(localStorage.getItem("shippingInfo")) : {} 
    }
};

const middleWare = [thunk];

const store = legacy_createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;