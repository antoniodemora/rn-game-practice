import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/color';

export default function StarGameScreen({onPickedNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (enteredText) => {
        console.log('entered text:', enteredText);
        setEnteredNumber(enteredText);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!', 'number has to be a number between 1 and 99',
                [{text: 'Ok', style: 'destructive',onPress: resetInputHandler }]
            );
            return;
        }
        console.log('Valid Number!', chosenNumber);
        onPickedNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                onChangeText={numberInputHandler}
                value={enteredNumber} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
        backgroundColor: Colors.background,
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
        borderBottomColor: Colors.accent,
        borderBottomWidth: 2,
        color: Colors.text,
        marginVertical: 8,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
});