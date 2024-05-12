import { CLEAR_ERRORS, PRODUCTS_FAIL, PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../constants/ProductConstant";
import axios from "axios";

export const getProducts = (keyword = "", sort = "", collection = "", page = 1) => async (dispatch) => {
    let url = `http://localhost:8000/api/v1/products?page=${page}`;

    // Adding search parameter if provided
    if (keyword) {
        url += `&search=${encodeURIComponent(keyword)}`;
    }

    // Adding sort parameter if provided
    if (sort) {
        url += `&sort=${sort}`;
    }

    // Adding category parameter if provided
    if (collection) {
        url += `&collection=${encodeURIComponent(collection)}`;
    }
    // if (categories && categories.length > 0) {
    //     categories.forEach(category => {
    //         url += `&categories[]=${encodeURIComponent(category)}`;
    //     });
    // }

    try {
        dispatch({ type: PRODUCTS_REQUEST });
        axios.defaults.withCredentials = true;
        const { data } = await axios.get(url);

        dispatch({ type: PRODUCTS_SUCCESS, payload: data });
    } 
    catch(error) {
        dispatch({ type: PRODUCTS_FAIL, payload: error.response.data.error });
    }
};

export const getProductDetails = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`http://localhost:8000/api/v1/product/${productId}`);

        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } 
    catch(error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.response.data.error });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};