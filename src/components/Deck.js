import React, { useEffect, useRef, useState } from 'react'
import {
    StyleSheet,
    View,
    Animated,
    PanResponder,
    Dimensions,
    LayoutAnimation,
    UIManager,
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.35

const Deck = ({ data, renderItem, renderNoMoreItems }) => {
    const [index, setIndex] = useState(0)
    const position = useRef(new Animated.ValueXY()).current

    useEffect(() => {
        setIndex(0)
    }, [data])

    useEffect(() => {
        // UIManager.setLayoutAnimationEnabledExperimental &&
        //     UIManager.setLayoutAnimationEnabledExperimental(true)
        LayoutAnimation.spring()
    }, [index])

    const forceSwipe = (direction) => {
        console.log({ direction })
        const swipeBy = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH
        Animated.timing(position, {
            toValue: { x: swipeBy, y: 0 },
            useNativeDriver: false,
            duration: 250,
        }).start(() => {
            position.setValue({ x: 0, y: 0 })
            setIndex((value) => value + 1)
        })
    }

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy })
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx >= SWIPE_THRESHOLD) {
                    forceSwipe('right')
                } else if (gesture.dx <= -SWIPE_THRESHOLD) {
                    forceSwipe('left')
                } else {
                    Animated.spring(position, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start()
                }
            },
        })
    ).current

    const getAnimationStyle = () => {
        const rotate = position.x.interpolate({
            inputRange: [SCREEN_WIDTH * -1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg'],
        })
        return { ...position.getLayout(), transform: [{ rotate }] }
    }

    const renderDeckItems = () =>
        index >= data.length
            ? renderNoMoreItems()
            : data
                  .map((item, idx) => {
                      if (idx < index) {
                          return null
                      } else if (idx === index) {
                          return (
                              <Animated.View
                                  key={item.id}
                                  style={[getAnimationStyle(), styles.wrapper]}
                                  {...panResponder.panHandlers}
                              >
                                  {renderItem(item)}
                              </Animated.View>
                          )
                      } else {
                          return (
                              <Animated.View
                                  key={item.id}
                                  style={[
                                      styles.wrapper,
                                      { top: 10 * (idx - index) },
                                  ]}
                              >
                                  {renderItem(item)}
                              </Animated.View>
                          )
                      }
                  })
                  .reverse()

    return <View>{renderDeckItems()}</View>
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        zIndex: 100,
    },
})

export default Deck
