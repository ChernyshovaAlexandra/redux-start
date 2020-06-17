import { combineReducers } from 'redux'
import { authReducer } from './auth/reducers'
import { registerReducer } from './registration/reducers'


export default combineReducers({
    auth: authReducer,
    registration: registerReducer
})
