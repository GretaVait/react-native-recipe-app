import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { CommonActions } from '@react-navigation/native'
import { CATEGORIES } from '../data/dummy-data'
import colors from '../constants/colors'
import CategoryGridItem from '../components/CategoryGridItem'

const CategoriesScreen = ({ navigation }) => {

  const handleNavigation = (title) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'CategoryMeals',
        params: {
          categoryTitle: title
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