import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {ToDoForm} from './molecules';

const App = () => {
  return (
    <View style={styles.container}>
      <ToDoForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: 35,
  },
});

export default App;
