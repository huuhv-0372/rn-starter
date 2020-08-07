import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

  const friends = [
    { name: 'John 1' },
    { name: 'John 2' },
    { name: 'John 3' },
    { name: 'John 4' },
    { name: 'John 5' },
    { name: 'John 6' }
  ];

  return (
    <FlatList
      keyExtractor={ (friend) => friend.name }
      data={friends}
      renderItem={({ item, index }) => {
        console.log(index);
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ListScreen;