import { StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/color";

const GestLogItem = ({ roundNumber, guess }) => {
    return <View style={styles.listItem}>
        <Text>
            #{roundNumber}
        </Text>
        <Text>
            Opponent's Guess: {guess}
        </Text>
    </View>
}

export default GestLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
})