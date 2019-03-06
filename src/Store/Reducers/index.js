import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'

const rootReducer = combineReducers({
    userAuth: AuthReducer
})

export default rootReducer