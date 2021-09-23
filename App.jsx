import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'


import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import useFonts from './hooks/useFonts'


import MealsNavigator from './navigation/MealsNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'

enableScreens()

export default function App() {
  return (
    <NavigationContainer>
      <MealsNavigator />
    </NavigationContainer>
  );
}
