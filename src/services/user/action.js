import axios from "axios"
import {
    EDIT_USER,
    IS_ERROR,
    IS_LOADING,
    LOGIN_USER,
    SIGNUP_SUCCESS
} from "./actionType"

export const loginUser = (user) => async (dispatch) => {
    dispatch({
        type: IS_LOADING
    })
    if (user.email === "") {
        dispatch({
            type: IS_ERROR,
            payload: "Email cannot be empty!"
        })
        return;
    }
    if (user.password === "") {
        dispatch({
            type: IS_ERROR,
            payload: "Password cannot be empty!"
        })
        return;
    }
    try {
        const curr_user = await axios.post('https://nice-tan-butterfly-sari.cyclic.app/user/login', user)
        if (curr_user.status == 200) dispatch({
            type: LOGIN_USER,
            payload: curr_user.data
        })
        else {
            dispatch({
                type: IS_ERROR,
                payload: curr_user?.response?.data
            })
        }
    } catch (error) {
        console.log(error)
        dispatch({
            type: IS_ERROR,
            payload: error?.response?.data
        })
    }
}
export const signupUser = (user) => async (dispatch) => {
    dispatch({
        type: IS_LOADING
    })
    if (user.username === "") {
        dispatch({
            type: IS_ERROR,
            payload: "Username cannot be empty!"
        })
        return;
    }
    if (user.email === "") {
        dispatch({
            type: IS_ERROR,
            payload: "Email cannot be empty!"
        })
        return;
    }
    if (user.password === "") {
        dispatch({
            type: IS_ERROR,
            payload: "Password cannot be empty!"
        })
        return;
    }
    try {
        const curr_user = await axios.post('https://nice-tan-butterfly-sari.cyclic.app/user/signup', user)
        if (curr_user.status !== 200) dispatch({
            type: IS_ERROR,
            payload: curr_user?.response?.data
        })
        else {
            dispatch({
                type: SIGNUP_SUCCESS
            })
        }
    } catch (error) {
        console.log(error)
        dispatch({
            type: IS_ERROR,
            payload: error?.response?.data
        })
    }
}
export const editUser = (user) => async (dispatch) => {
    dispatch({
        type: IS_LOADING
    })
    console.log(user)
    try {
        const curr_user = await axios.patch(`https://nice-tan-butterfly-sari.cyclic.app/user/edit/${user._id}`, user)
        if (curr_user.status == 200) dispatch({
            type: EDIT_USER,
            payload: curr_user?.data
        })
        else dispatch({
            type: IS_ERROR,
            payload: 'Edit failed'
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: IS_ERROR,
            payload: 'Internal Server Error'
        })
    }
}