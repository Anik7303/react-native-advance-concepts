import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

import Slides from '../components/Slides'

const slide_data = [
    { text: 'Welcome to JobApp', color: '#03a9f4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location, and swipe away', color: '#03a9f4' },
]

const WelcomeScreen = ({ navigation }) => {
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
