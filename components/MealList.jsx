// Base
import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
// Navigation
import { CommonActions } from '@react-navigation/native'
// Comp
import MealItem from './MealItem'

const MealList = ({ data, navigation }) => {

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