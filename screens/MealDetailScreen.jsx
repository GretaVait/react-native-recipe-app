import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'

const MealDetailScreen = ({ navigation, route }) => {
  const mealId = route.params.mealId

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go back to categories"
        onPress={() => {
          navigation.popToTop()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default MealDetailScreen