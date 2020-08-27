import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyFuncComponent from './components/myFuncComponent';
import MyClassComponent from './components/MyClassComponent';
import MyOSComponent from './components/MyOSComponent/MyOsComponent'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <MyFuncComponent>

      </MyFuncComponent>
      <MyClassComponent>
      
      </MyClassComponent>
      <MyOSComponent>

      </MyOSComponent>
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
});
