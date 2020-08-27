import React from 'react';
import {View, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {ToDoForm, ToDoList} from './molecules';

const App = () => {
  const todosRef = firestore().collection('todos');

  return (
    <View style={styles.container}>
      <ToDoForm todosRef={todosRef} />
      <ToDoList todosRef={todosRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default App;
