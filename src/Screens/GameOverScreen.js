
import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import Colors from '../Constants/Colors';
import BodyText from '../Components/BodyText';
import MainButton from '../Components/MainButton';

const GameOverScreen = (props) => (
  <View style={styles.screen}>
    <Text>The Game is Over!</Text>
    <View style={styles.imageContainer}>
      <Image
        fadeDuration={1000}     //Default: 300
        source={require('./../../assets/success.png')}
        // source={{uri: 'https://images.pexels.com/photos/291732/pexels-photo-291732.jpeg'}}
        style={styles.image} />
    </View>
    <View style={styles.resultTextContainer}>
      <BodyText style={styles.resultText}>
        Your Phone needed <Text style={styles.hightlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.hightlight}>{props.userNumber}</Text>
      </BodyText>
    </View>

    <MainButton onPress={props.onRestart}>
        NEW GAME
    </MainButton>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  hightlight: {
    color: Colors.primary
  },
  resultTextContainer: {
    marginVertical: 15,
    marginHorizontal: 30,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default GameOverScreen;
