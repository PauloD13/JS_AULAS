import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  
  
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
          <Text>ola</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#c94646',
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App