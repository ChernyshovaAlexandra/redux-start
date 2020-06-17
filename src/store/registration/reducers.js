import { REGISTRATION_CHANGE_EMAIL, REGISTRATION_CHANGE_PASSWORD, REGISTRATION_CHANGE_REPEAT_PASSWORD } from './actions'


const defaultState = {
    email: '',
    pass: '',
    repeatPass: ''
}

export const registerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTRATION_CHANGE_EMAIL:
            return { ...state, email: action.type}
        case REGISTRATION_CHANGE_PASSWORD:
            return { ...state, pass: action.type}
        case REGISTRATION_CHANGE_REPEAT_PASSWORD:
            return { ...state, repeatPass: action.type}

    }
    return state
}