import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { CommonActions } from '@react-navigation/native'

const CategoriesScreen = ({ navigation }) => {

  return (
    <View style={styles.screen}>
      <Text>The categories screen</Text>
      <Button 
        title="Go to Category Meals" 
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Category Meals',
            })
          )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default CategoriesScreen