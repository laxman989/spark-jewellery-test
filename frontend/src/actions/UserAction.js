import axios from "axios";
import { CLEAR_ERRORS, FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "../constants/UserConstant";

const token = localStorage.getItem("token") ? localStorage.getItem("token") : "";

axios.defaults.withCredentials = true;

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        axios.defaults.withCredentials = true;
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(`http://localhost:8080/api/v1/user/login`, {email, password}, config);

        dispatch({ type: LOGIN_SUCCESS, payload: data.user });
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user));
    } 
    catch(error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.error });
        console.log(error.response.data.error);
    }
};

export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST });
        axios.defaults.withCredentials = true;
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const { data } = await axios.post(`http://localhost:8080/api/v1/user/register`, userData, config);

        dispatch({ type: REGISTER_SUCCESS, payload: data.user });
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user));
    } 
    catch(error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response.data.error });
        console.log(error.response.data.error);
    }
};

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });
        axios.defaults.withCredentials = true;
        const config = { headers: { "Authorization": `Bearer ${token}` } };
        const { data } = await axios.get(`http://localhost:8080/api/v1/user/me`, config);

        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } 
    catch(error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.error });
        console.log(error.response.data.error);
    }
};

export const logout = () => async (dispatch) => {
    try {
        await axios.get(`http://localhost:8080/api/v1/user/logout`);

        dispatch({ type: LOGOUT_SUCCESS });
    } 
    catch(error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.error });
        console.log(error.response.data.error);
    }
};

export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.put(`http://localhost:8080/api/v1/user/profile/update`, userData, config);

        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
    } 
    catch(error) {
        dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.response.data.error });
        console.log(error.response.data.error);
    }
};

export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.put(`http://localhost:8080/api/v1/user/password/update`, passwords, config);

        dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
    } 
    catch(error) {
        dispatch({ type: UPDATE_PASSWORD_FAIL, payload: error.response.data.error });
        console.log(error.response.data.error);
    }
};

export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST });
        axios.defaults.withCredentials = true;
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(`http://localhost:8080/api/v1/password/forgot`, email, config);
        console.log(data);

        dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
    } 
    catch(error) {
        dispatch({ type: FORGOT_PASSWORD_FAIL, payload: error.response.data.error });
        console.log(error.response.data.error);
    }
};

export const resetPassword = (passwords) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.put(`http://localhost:8080/api/v1/password/update`, passwords, config);

        dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
    } 
    catch(error) {
        dispatch({ type: UPDATE_PASSWORD_FAIL, payload: error.response.data.error });
        console.log(error.response.data.error);
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};