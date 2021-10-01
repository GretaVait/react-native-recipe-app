// Base
import React, { useContext } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
// Navigation
import { CommonActions } from '@react-navigation/native'
// Comp
import MealItem from './MealItem'
import { AppContext } from '../context/AppContext'
import { useEffect } from 'react/cjs/react.development'

const MealList = ({ data, navigation }) => {
  const { favouriteMeals } = useContext(AppContext)
 
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
      <FlatList data={data} renderItem={renderMealItem} contentContainerStyle={styles.list} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },  
  list: {
    paddingHorizontal: 16,
    paddingVertical: 48
  },
})

export default MealList