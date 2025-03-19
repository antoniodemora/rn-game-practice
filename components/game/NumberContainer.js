import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/color';

function NumberContainer({children}){
    return <View style={style.container}>
        <Text style={style.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent,
        padding: deviceWidth < 380 ? 12 : 24,
        margin:deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        alignContent: 'center'
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.text,
        fontSize: deviceWidth < 380 ? 24 : 36,
    }
});