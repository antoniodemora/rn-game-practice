import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 12
    }
})