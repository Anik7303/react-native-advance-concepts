import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Provider } from 'react-redux'

import store from './src/store'
import AuthScreen from './src/screens/AuthScreen'
import DeckScreen from './src/screens/DeckScreen'
import MapScreen from './src/screens/MapScreen'
import ReviewScreen from './src/screens/ReviewScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'

const reviewFlow = createStackNavigator({
    Review: ReviewScreen,
    Settings: SettingsScreen,
})

const mainFlow = createBottomTabNavigator({
    Map: MapScreen,
    Deck: DeckScreen,
    review: reviewFlow,
})

const navigator = createSwitchNavigator({
    Welcome: WelcomeScreen,
    Auth: AuthScreen,
    main: mainFlow,
})

const MainNavigator = createAppContainer(navigator)

const App = () => (
    <Provider store={store}>
        <MainNavigator />
    </Provider>
)

export default App
