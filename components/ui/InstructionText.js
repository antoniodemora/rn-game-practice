import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/color";

const InstructionText = ({ children, style }) => {
    return <Text style={[styles.instruccionText, style]}>{children}</Text>
};

const styles = StyleSheet.create({
    instruccionText: {
        fontFamily: 'open-sans',
        color: Colors.text,
        fontSize: 24
    },
});

export default InstructionText;