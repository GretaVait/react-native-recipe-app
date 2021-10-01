import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'


import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { AppProvider } from './context/AppContext'


import MealsNavigator from './navigation/MealsNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'

enableScreens()

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <MealsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
