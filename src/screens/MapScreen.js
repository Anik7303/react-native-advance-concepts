import React, { useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView from 'react-native-maps'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const MapScreen = () => {
    const [region, setRegion] = useState({
        latitude: 37,
        longitude: -122,
        latitudeDelta: 0.04,
        longitudeDelta: 0.09,
    })

    console.log({ region })

    // const onRegionChangeComplete = (region) => setRegion(region)

    return (
        <SafeAreaView style={styles.container}>
            <MapView
                region={region}
                onRegionChangeComplete={setRegion}
                style={styles.map}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    map: {
        flex: 1,
        width: '100%',
    },
})

export default MapScreen
