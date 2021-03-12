import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'

import { facebookLogin } from '../actions'

const AuthScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(facebookLogin())
    }, [])

    useEffect(() => {
        if (token) navigation.navigate('Map')
    }, [token])

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" style={styles.loader} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#03a9f4',
        flex: 1,
        justifyContent: 'center',
    },
    loader: {
        color: 'white',
    },
})

export default AuthScreen
