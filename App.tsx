import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Numpad from './components/Numpad';
import DisplayArea from './components/DisplayArea';

function App(): JSX.Element {
  const [displayItem, setDisplayItem] = useState(['0']);
  return (
    <SafeAreaView style={styles.container}>
      <DisplayArea {...{displayItem, setDisplayItem}} />
      <View style={styles.separator} />
      <Numpad {...{displayItem, setDisplayItem}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingBottom: 30,
  },
  separator: {
    backgroundColor: '#212121',
    height: 2,
  },
});

export default App;
