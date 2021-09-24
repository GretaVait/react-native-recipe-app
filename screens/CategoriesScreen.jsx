// Base
import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
// Navigation
import { CommonActions } from '@react-navigation/native'
// Data
import { CATEGORIES } from '../data/dummy-data'
// Const
import colors from '../constants/colors'
// Comp
import CategoryGridItem from '../components/CategoryGridItem'

const CategoriesScreen = ({ navigation }) => {

  const handleNavigation = (title, id) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'CategoryMeals',
        params: {
          categoryTitle: title,
          categoryId: id
        }
      })
    )
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.list}>
        {
          CATEGORIES.map((item) => (
            <CategoryGridItem item={item} onSelect={handleNavigation} key={item.id} />
          ))
        }
      </ScrollView>
    </View>
  )
}

CategoriesScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: colors.black
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default CategoriesScreen