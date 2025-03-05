import { View, Text, Pressable, StyleSheet } from 'react-native';

export default PrimaryButton = ({children, onPress}) => {
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => 
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : [styles.buttonInnerContainer]
                    }
                onPress={onPress} android_ripple={{color: '#C92F49'}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#FF5E78',
        paddingVertical: 8,
        paddingHorizontal: 16,
        boxShadow: '2 2 3 0 darkslategray',
    },
    buttonText: {
        color: '#EDEDEDC7',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
});
