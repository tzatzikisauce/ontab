import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const users = [
    { name: 'user 1', key: '1' },
    { name: 'user 2', key: '2' },
    { name: 'user 3', key: '3' },
    { name: 'user 4', key: '4' },
    { name: 'user 5', key: '5' },
    { name: 'user 6', key: '6' },
    { name: 'user 7', key: '7' },
    { name: 'user 8', key: '8' },
    { name: 'user 9', key: '9' }
  ];

  return (
    <FlatList
      keyExtractor={user => user.name}
      data={users}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
