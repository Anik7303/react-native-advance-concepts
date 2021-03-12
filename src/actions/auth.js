import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Facebook from 'expo-facebook'

import {
    SET_AUTH_TOKEN,
    FACEBOOK_LOGIN_FAIL,
    FACEBOOK_LOGIN_SUCCESS,
} from './types'
import Keys from '../config'

const TOKEN = 'facebook_token'

export const checkAuthStatus = () => async (dispatch) => {
    try {
        const token = await AsyncStorage.getItem(TOKEN)

        dispatch({ type: SET_AUTH_TOKEN, payload: token || false })
    } catch (error) {
        console.error({ CheckAuthStatus: error })
    }
}

const doFacebookLogin = async (dispatch) => {
    // Initialize facebook sdk
    await Facebook.initializeAsync({ appId: Keys.FACEBOOK_APP_ID })

    // try to login using facebook sdk
    const result = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
    })

    if (result.type === 'cancel') {
        dispatch({ type: FACEBOOK_LOGIN_FAIL })
        return
    }

    await AsyncStorage.setItem(TOKEN, result.token)

    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: result.token })
}

export const facebookLogin = () => async (dispatch) => {
    try {
        const token = await AsyncStorage.getItem(TOKEN)
        if (token) {
            dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
            return
        }

        doFacebookLogin(dispatch)
    } catch (error) {
        console.error({ FacebookLogin: error })
    }
}
