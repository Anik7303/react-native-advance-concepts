import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Animated } from 'react-native'

const Ball = () => {
    const ballAnimation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current

    useEffect(() => {
        Animated.spring(ballAnimation, {
            toValue: { x: 300, y: 600 },
            useNativeDriver: false,
        }).start(() => console.log('Animation ended'))
    }, [])

    const getBallStyle = () => {
        const style = ballAnimation.getLayout()
        console.log({ ...style })
        return style
    }

    return (
        <Animated.View style={getBallStyle()}>
            <View style={styles.ball} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    ball: {
        backgroundColor: 'rgb(0, 0, 0)',
        borderRadius: 60,
        height: 60,
        width: 60,
    },
})

export default Ball
