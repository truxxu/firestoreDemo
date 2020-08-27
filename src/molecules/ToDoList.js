import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {Spinner, ToDoCard} from '../atoms';

const ToDoList = ({todosRef}) => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    return todosRef.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const {text, completed} = doc.data();
        list.push({
          id: doc.id,
          text,
          completed,
        });
      });

      setTodos(list);

      if (loading) {
        setLoading(false);
      }
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <View>
      <Text style={styles.title}>TODOs List</Text>
      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ToDoCard {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    padding: 5,
  },
  title: {
    marginVertical: 15,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});

export {ToDoList};
