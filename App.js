import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Button, Card, Icon, Text } from 'react-native-elements'

// import Ball from './src/components/Ball'
import Deck from './src/components/Deck'

const DATA = [
    {
        id: 1,
        text: 'Card #1',
        uri: 'https://images.unsplash.com/photo-1615209646798-10efdcf63fff',
    },
    {
        id: 2,
        text: 'Card #2',
        uri: 'https://images.unsplash.com/photo-1615232934495-9ff34ba4f953',
    },
    {
        id: 3,
        text: 'Card #3',
        uri: 'https://images.unsplash.com/photo-1615227777158-3de68180af11',
    },
    {
        id: 4,
        text: 'Card #4',
        uri: 'https://images.unsplash.com/photo-1615240592098-b2b1eb547fba',
    },
    {
        id: 5,
        text: 'Card #5',
        uri: 'https://images.unsplash.com/photo-1615089792345-59b0f33f4880',
    },
    {
        id: 6,
        text: 'Card #1',
        uri: 'https://images.unsplash.com/photo-1615209646798-10efdcf63fff',
    },
    {
        id: 7,
        text: 'Card #2',
        uri: 'https://images.unsplash.com/photo-1615232934495-9ff34ba4f953',
    },
    {
        id: 8,
        text: 'Card #3',
        uri: 'https://images.unsplash.com/photo-1615227777158-3de68180af11',
    },
    {
        id: 9,
        text: 'Card #4',
        uri: 'https://images.unsplash.com/photo-1615240592098-b2b1eb547fba',
    },
]

const renderItem = ({ id, text, uri }) => (
    <Card key={id}>
        <Card.Title>{text}</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri }} />
        <Text style={styles.text}>I can customize the card further.</Text>
        <Card.Divider />
        <Button
            title="View Now!"
            buttonStyle={styles.button}
            icon={<Icon name="code" color="white" />}
            onPress={() => {}}
        />
    </Card>
)

const renderNoMoreItems = () => (
    <Card>
        <Card.Title>All Done!</Card.Title>
        <Card.Divider />
        <Text style={[styles.text, { textAlign: 'center' }]}>
            There's no more content here!
        </Text>
        <Card.Divider />
        <Button style={styles.button} title="Get more!" onPress={() => {}} />
    </Card>
)

const App = () => (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Deck
            data={DATA}
            renderItem={renderItem}
            renderNoMoreItems={renderNoMoreItems}
        />
        {/* <Ball /> */}
    </SafeAreaView>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#03A9F4',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Constants.statusBarHeight,
    },
    text: {
        paddingVertical: 10,
    },
})

export default App
