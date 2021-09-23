// Base
import React from 'react'
import { View, StyleSheet, FlatList  } from 'react-native'
// Navigation
import { CommonActions } from '@react-navigation/native'
// Data
import { MEALS } from '../data/dummy-data'
// Comp
import MealItem from '../components/MealItem'

const CategoryMealScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

  const handleNavigation = (id, title) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'MealDetail',
        params: {
          mealId: id,
          mealTitle: title
        }
      })
    )
  }

  const renderMealItem = (itemData) => {
    return (
      <MealItem itemData={itemData} onSelectMeal={() => { handleNavigation(itemData.item.id, itemData.item.title) }} />
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