import { EDIT_USER, IS_ERROR, IS_LOADING, LOGGED_IN, LOGIN_USER, LOGOUT_USER, SIGNUP_SUCCESS } from "./user/actionType"

const iniState = {
    user: {},
    error: false,
    loading:false,
    status:0,
    loggedIn:false
}
export const userReducer = (state=iniState,{type,payload}) => {
    console.log(type,"called",payload)
    switch(type){
        case LOGIN_USER: return {...state,user:payload,error:false,loading:false,status:1}
        case LOGOUT_USER: return {user:{},error:false,loading:false,loggedIn:false,status:0}
        case EDIT_USER: return {...state,user:payload,error:false,loading:false,status:0}
        case IS_ERROR: return {...state,error:payload,loading:false,status:0}
        case IS_LOADING: return {...state,loading:true,status:0}
        case SIGNUP_SUCCESS: return {...state,loading:false,status:2}
        case LOGGED_IN: return {...state,loggedIn:true,status:0}
        default: return {...state,loading:false,status:0}
    }
}