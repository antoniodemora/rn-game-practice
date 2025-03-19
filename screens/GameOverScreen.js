import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
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

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        //marginTop: 75,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: windowWidth < 380 ? 150 : 300,
        height: windowWidth < 380 ? 150 : 300,
        borderRadius: windowWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.secondary,
        overflow: 'hidden',
        margin: windowWidth < 380 ? 18 : 36
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