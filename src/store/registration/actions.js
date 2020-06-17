export const REGISTRATION_CHANGE_EMAIL = 'REGISTRATION_CHANGE_EMAIL'
export const REGISTRATION_CHANGE_PASSWORD = 'REGISTRATION_CHANGE_PASSWORD'
export const REGISTRATION_CHANGE_REPEAT_PASSWORD = 'REGISTRATION_CHANGE_REPEAT_PASSWORD'

export const setEmail = (email) => ({
    type: REGISTRATION_CHANGE_EMAIL,
    payload: email
})

export const setPassword = (pass) => ({
    type: REGISTRATION_CHANGE_PASSWORD,
    payload: pass
})

export const setPasswordRepeat = (pass) => ({
    type: REGISTRATION_CHANGE_REPEAT_PASSWORD,
    payload: pass
})