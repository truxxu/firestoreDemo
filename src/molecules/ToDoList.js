import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

import {Spinner} from '../atoms';

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
      <Text>List</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

export {ToDoList};
