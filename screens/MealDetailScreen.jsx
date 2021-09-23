import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const MealDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The meal detail screen</Text>
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