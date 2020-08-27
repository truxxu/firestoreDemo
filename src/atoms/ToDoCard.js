import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ToDoCard = ({text, completed}) => {
  const onPress = () => {
    console.log('pressed!');
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{text}</Text>
      <Text>{completed ? 'completed' : 'to do'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 2,
    borderColor: 'gray',
    marginBottom: 5,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export {ToDoCard};
