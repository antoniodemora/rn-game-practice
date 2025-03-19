import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, KeyboardAvoidingView, useWindowDimensions, ScrollView } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/color';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText.js';

export default function StarGameScreen({onPickedNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');
    const { width, height } = useWindowDimensions();

    const numberInputHandler = (enteredText) => {
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
        onPickedNumber(chosenNumber);
    }

    const rootMarginTop = height < 380 ? 30 : 100;
    const rootJustifyContent = height > 1200 ? 'center' : 'flex-start';

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={[styles.rootContainer, { marginTop: rootMarginTop, justifyContent: rootJustifyContent }]}>
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
            </KeyboardAvoidingView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center'
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