import {
    FACEBOOK_LOGIN_FAIL,
    FACEBOOK_LOGIN_SUCCESS,
    RESET_AUTH,
    SET_AUTH_TOKEN,
} from '../actions/types'

const INITIAL_STATE = { token: null }

const reducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case FACEBOOK_LOGIN_FAIL:
            return { ...state, token: null }
        case FACEBOOK_LOGIN_SUCCESS:
            return { ...state, token: payload }
        case RESET_AUTH:
            return { ...INITIAL_STATE }
        case SET_AUTH_TOKEN:
            return { ...state, token: payload }
        default:
            return state
    }
}

export default reducer
