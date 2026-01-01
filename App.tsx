import { StyleSheet, Text, View } from 'react-native';
import Config from 'react-native-config';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App Environment: {Config.ENV}</Text>
      <Text>API URL: {Config.API_URL}</Text>
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
