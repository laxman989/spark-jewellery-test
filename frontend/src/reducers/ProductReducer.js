import { PRODUCTS_FAIL, PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../constants/ProductConstant";
import { CLEAR_ERRORS } from "../constants/UserConstant";

export const productsReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount
            }
        case PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default :
            return state
    }
};

export const productDetailsReducer = (state = {productDetails: {}}, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload.product,
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default :
            return state
    }
}