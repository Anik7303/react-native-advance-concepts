import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

const Slides = ({ data, onFinish }) => {
    const lastIndex = data.length - 1

    const renderSlides = () =>
        data.map(({ text, color }, index) => (
            <View
                key={text}
                style={[
                    styles.slide,
                    { backgroundColor: color || 'dodgerblue' },
                ]}
            >
                <Text style={styles.text}>{text}</Text>
                {index === lastIndex ? (
                    <Button
                        title="Onwards!"
                        onPress={onFinish}
                        buttonStyle={styles.button}
                        containerStyle={styles.buttonContainer}
                    />
                ) : null}
            </View>
        ))

    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
        >
            {renderSlides()}
        </ScrollView>
    )
}

Slides.defaultProps = {
    onFinish: () => {},
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0288D1',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    scrollView: {
        flex: 1,
    },
    slide: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        width: SCREEN_WIDTH,
    },
    text: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
})

export default Slides
