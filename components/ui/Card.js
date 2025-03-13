import { View, StyleSheet } from "react-native";
import Colors from "../../constants/color";


const Card = ({ children }) => {
    return <View style={style.card}>
        { children }
    </View>
};

export default Card;

const style = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.background,
        borderRadius: 8,
        boxShadow: '2 2 8 0 gray'
    },
})
