import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/color';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ roundNumber, userNumber, onStartNewGame }) => {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <View>
                <Text style={styles.summaryText}>Your phoned needed <Text style={styles.highlightedText}>{roundNumber}</Text> rounds to guess the number <Text style={styles.highlightedText}>{userNumber}</Text></Text>
            </View>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.secondary,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText:{
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlightedText: {
        fontFamily: 'open-sans-bold',
        //fontSize: 48,
        color: Colors.primaryVariant
    }
});

export default GameOverScreen;