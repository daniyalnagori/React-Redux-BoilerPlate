import {
    SIGNUP
} from "./../Constant"

export default class AuthActions {

    static signup(user) {
        return {
            type: SIGNUP,
            payload: user
        }
    }
}