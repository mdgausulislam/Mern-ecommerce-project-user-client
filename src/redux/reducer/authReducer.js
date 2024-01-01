import { authConstant } from "../actions/constant";

const initState = {
    token: null,
    user: {
        firstName: "",
        lastName: "",
        email: "",
        picture: "",
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: "",
};


const authReducers = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case authConstant.LOGIN_REQUEST:
            return {
                ...state,
                authenticating: true
            };
        case authConstant.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            };
        case authConstant.LOGOUT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case authConstant.LOGOUT_SUCCESS:
            return {
                ...initState,
                authenticating: true
            };
        case authConstant.LOGOUT_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                loading: false
            };
        case authConstant.SIGNUP_REQUEST:
            return {
                ...state, // Return the current state for SIGNUP_REQUEST
                loading: true,
                error: null,
            };
        case authConstant.SIGNUP_SUCCESS:
            return {
                ...state, // Return the current state for SIGNUP_SUCCESS
                loading: false,
                error: null,
            };
        case authConstant.SIGNUP_FAILURE:
            return {
                ...state, // Return the current state for SIGNUP_FAILURE
                loading: false,
                error: action.payload.error,
            };

        default:
            return state;
    }
};

export default authReducers;