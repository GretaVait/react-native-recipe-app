// Base
import React from 'react'
// Data
import { MEALS } from '../data/dummy-data'
// Comp
import MealList from '../components/MealList'

const CategoryMealScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
  
  return (
    <MealList data={displayedMeals} navigation={navigation} />
  )
}

export default CategoryMealScreen