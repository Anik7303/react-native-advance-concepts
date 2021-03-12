import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useDispatch, useSelector } from 'react-redux'

import Slides from '../components/Slides'
import { checkAuthStatus } from '../actions'

const slide_data = [
    { id: 1, text: 'Welcome to JobApp', color: '#03a9f4' },
    { id: 2, text: 'Use this to get a job', color: '#009688' },
    { id: 3, text: 'Set your location, and swipe away', color: '#03a9f4' },
]

const WelcomeScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(checkAuthStatus())
    }, [])

    useEffect(() => {
        if (token) navigation.navigate('Map')
    }, [token])

    if (token === null) return <AppLoading />

    return (
        <View style={styles.container}>
            <Slides
                data={slide_data}
                onFinish={() => navigation.navigate('Auth')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default WelcomeScreen
