import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import Ball from './src/components/Ball'

const App = () => (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Ball />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default App
