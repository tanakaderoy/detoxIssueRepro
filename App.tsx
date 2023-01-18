import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Detox Issue Repro</Text>
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
