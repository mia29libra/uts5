import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import router from './router';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
    <Router/>  
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})