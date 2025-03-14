import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  const pickNumberHandler = (pickedNumber)  => {
    setUserNumber(pickedNumber);
  }

  const GameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  let screen = <StartGameScreen onPickedNumber={pickNumberHandler}/>

  const StartNewGameHandler = () =>{
    setGameIsOver(false);
    setUserNumber(undefined);
    setGuessRounds(0);
  }

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={GameOverHandler}></GameScreen>
  }

  if(gameIsOver){
    screen = <GameOverScreen userNumber={userNumber} roundNumber={guessRounds} onStartNewGame={StartNewGameHandler}></GameOverScreen>
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
