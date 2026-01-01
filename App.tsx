import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Config from 'react-native-config';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>{Config.ENV}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
