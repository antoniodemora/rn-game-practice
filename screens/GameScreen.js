import { useState } from 'react';
import { StyleSheet, Text , View } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

export default function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style={styles.game}>
            <Title>Opponent's Gess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <Text>+ -</Text>
            </View>
            <View>
                <Text>LOG ROUNDS</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    game: {
        flex: 1,
        padding: 48
    }
})