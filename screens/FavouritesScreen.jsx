import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useContext } from 'react/cjs/react.development'
import MealList from '../components/MealList'
import { AppContext } from '../context/AppContext'

const FavouritesScreen = ({ navigation }) => {
  const { favouriteMeals } = useContext(AppContext)

  return (
    <MealList data={favouriteMeals} navigation={navigation} />
  )
}

export default FavouritesScreen