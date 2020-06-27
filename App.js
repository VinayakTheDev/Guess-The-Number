import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import GoalItem from './src/Components/GoalItem';
import GoalInput from './src/Components/GoalInput';
import Header from './src/Components/Header';
import StartGameScreen from './src/Screens/StartGameScreen';
import GameScreen from './src/Screens/GameScreen';
import GameOverScreen from './src/Screens/GameOverScreen';



const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};


export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const [dataLoaded, setDataLoaded] = useState(false);

  // if (!dataLoaded) {
  //   // return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log(err)} />
  //   // );
  // }

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...currentGoals,
    { key: Math.random().toString(), value: enteredGoal }
    ])
    setIsAddMode(false)
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key != goalId);
    });
  }

  const cancelGoalAdditionalHandler = () => {
    console.log("cancel")
    setIsAddMode(false)
  }


  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }
  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />

      {/* GAME START */}

      {content}


      {/* GAME END */}

      {/* GOAL START */}
      {/* GOAL END */}
      {/* <View style={{ padding: 50 }}>
        <View>
          <Button title="Add a Goal" onPress={() => setIsAddMode(true)} />
          <GoalInput visible={isAddMode}
            action={addGoalHandler}
            onCancel={cancelGoalAdditionalHandler} />
          <View>
            <FlatList
              keyExtractor={(item, index) => item.key}
              data={courseGoals}
              renderItem={(itemData) =>
                <GoalItem title={itemData.item.value} id={itemData.item.key} onDelete={removeGoalHandler} />
              }
            />
          </View>
        </View>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1
  }

});
