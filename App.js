import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickNumberHandler = (pickedNumber)  => {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickedNumber={pickNumberHandler}/>

  if(userNumber){
    screen = <GameScreen></GameScreen>
  }

  return (
    <LinearGradient
      colors={['#2E294E', '#1B1B1F', '#FF5E78']}
      locations={[0, 0.5, 1]}
      start={{ x: 0.97, y: 0 }}
      end={{ x: 0, y: 0.97 }}
      style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
          >
            <SafeAreaView style={styles.rootScreen}>
              {screen}
            </SafeAreaView>
        </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
