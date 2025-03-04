import { View, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function StarGameScreen(){
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad'/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View >
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#1B1B1F',
        borderRadius: 8,
        boxShadow: '2 2 3 1 gray'
    },
    numberInput: {
        fontSize: 32,
        lineHeight: 32,
        height: 60,
        width: 56,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingVertical: 0,
        borderBottomColor: '#2E294E',
        borderBottomWidth: 2,
        color: '#EDEDEDC7',
        marginVertical: 8,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
        //width: '100%'
    },
    buttonContainer: {
        flex: 1
    }
});