import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Dimensions } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/color';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText.js';

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
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
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
            </Card>
        </View>
    )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: windowWidth > 420 ? 'center' : 'flex-start'
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