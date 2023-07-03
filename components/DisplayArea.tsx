import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface IDisplayArea {
  displayItem: string[];
}

export default function DisplayArea({displayItem}: IDisplayArea) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayItem?.map(item => item)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  text: {
    fontSize: 50,
  },
});
