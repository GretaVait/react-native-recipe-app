import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { CommonActions } from '@react-navigation/native'
import { CATEGORIES } from '../data/dummy-data'
import colors from '../constants/colors'

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
            <TouchableOpacity key={item.id} onPress={() => { handleNavigation(item.title) }} style={styles.gridItem}>
              <View>
                <Text style={styles.gridItemText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
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
  gridItem: {
    margin: 8,
    padding: 16,
    backgroundColor: colors.primary,
    borderRadius: 8
  },
  gridItemText: {
    color: colors.white,
  }
})

export default CategoriesScreen