import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { CommonActions } from '@react-navigation/native'

const CategoryMealScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The category meals screen</Text>
      <Button 
        title="Go to Meals" 
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'MealDetail',
            })
          )
        }
      />
      <Button title="Go Back" onPress={() => { navigation.goBack() }} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default CategoryMealScreen