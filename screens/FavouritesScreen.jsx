import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'

const FavouritesScreen = ({ navigation }) => {
  const faveMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

  return (
    <MealList data={faveMeals} navigation={navigation} />
  )
}

export default FavouritesScreen