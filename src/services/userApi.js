import { EDIT_USER, IS_ERROR, IS_LOADING, LOGGED_IN, LOGIN_USER, LOGOUT_USER, SIGNUP_SUCCESS } from "./user/actionType"

const iniState = {
    user: {},
    error: false,
    loading:false,
    status:'',
    loggedIn:false
}
export const userReducer = (state=iniState,{type,payload}) => {
    switch(type){
        case LOGIN_USER: return {user:payload,error:false,loading:false,status:1}
        case LOGOUT_USER: return {user:{},error:false,loading:false,loggedIn:false}
        case EDIT_USER: return {user:payload,error:false,loading:false}
        case IS_ERROR: return {...state,error:payload,loading:false}
        case IS_LOADING: return {...state,loading:true,status:0}
        case SIGNUP_SUCCESS: return {...state,loading:false,status:2}
        case LOGGED_IN: return {...state,loggedIn:true}
        default: return {...state,loading:false,status:0}
    }
}