import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold', // not using fontWeight since the font itself is bold
        fontSize: 24,
        color: Colors.text,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
})