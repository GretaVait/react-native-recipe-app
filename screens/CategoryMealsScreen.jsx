// Base
import React, { useContext } from 'react'
// Data
import { MEALS } from '../data/dummy-data'
// Comp
import MealList from '../components/MealList'
// 
import { AppContext } from '../context/AppContext'

const CategoryMealScreen = ({ navigation, route }) => {
  const { filtersData } = useContext(AppContext)

  const catId = route.params.categoryId
  const displayedMeals = MEALS.filter(meal => (meal.categoryIds.indexOf(catId) >= 0 ))

  return (
    <MealList data={displayedMeals} navigation={navigation} />
  )
}

export default CategoryMealScreen