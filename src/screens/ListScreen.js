import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const users = [
    { name: 'user 1', age: 20, key: '1' },
    { name: 'user 2', age: 21, key: '2' },
    { name: 'user 3', age: 22, key: '3' },
    { name: 'user 4', age: 23, key: '4' },
    { name: 'user 5', age: 24, key: '5' },
    { name: 'user 6', age: 25, key: '6' },
    { name: 'user 7', age: 26, key: '7' },
    { name: 'user 8', age: 27, key: '8' },
    { name: 'user 9', age: 28, key: '9' }
  ];

  return (
    <FlatList
      keyExtractor={user => user.name}
      data={users}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
