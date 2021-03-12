import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const ReviewScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Review Screen</Text>
        </View>
    )
}

ReviewScreen.navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: () => (
        <Button
            onPress={() => navigation.navigate('Settings')}
            buttonStyle={styles.button}
            icon={{
                name: 'settings',
                size: 24,
                ...styles.icon,
            }}
        />
    ),
})

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        color: 'dodgerblue',
        backgroundColor: 'transparent',
    },
})

export default ReviewScreen
