import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MealDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The meal detail screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default MealDetailScreen