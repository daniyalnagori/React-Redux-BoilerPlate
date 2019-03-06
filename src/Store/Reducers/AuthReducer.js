import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
} from '../Constant'

const initialState = {
    user: {},
    authUser: {},
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                authUser: {},
                user: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }

        case SIGNUP_SUCCESS:
            return {
                ...state,
                authUser: action.payload,
                isLoading: false,
            }

        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }

        default:
            return state
    }
}