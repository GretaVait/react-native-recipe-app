// Base
import React from 'react'
import { View, StyleSheet, FlatList  } from 'react-native'
// Data
import { MEALS } from '../data/dummy-data'
// Comp
import MealItem from '../components/MealItem'

const CategoryMealScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

  const renderMealItem = (itemData) => {
    return (
      <MealItem itemData={itemData} onSelectMeal={() => {}} />
    )
  }
  
  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 48
  },
})

export default CategoryMealScreen