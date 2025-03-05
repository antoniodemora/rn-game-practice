import { StyleSheet, Text , View } from 'react-native';
import Title from '../components/Title';

export default function GameString() {
    return (
        <View style={styles.game}>
            <Title>Opponent's Gess</Title>
            <Text>GUESS</Text>
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