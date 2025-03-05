import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/color';

function NumberContainer({children}){
    return <View style={style.container}>
        <Text style={style.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;

const style = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent,
        padding: 24,
        margin:24,
        borderRadius: 8,
        alignItems: 'center',
        alignContent: 'center'
    },
    numberText: {
        color: Colors.text,
        fontSize: 36,
        fontWeight: 'bold'
    }
});