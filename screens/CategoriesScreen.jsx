import React from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import { CommonActions } from '@react-navigation/native'
import { CATEGORIES } from '../data/dummy-data'
import { ScrollView } from 'react-native-gesture-handler'

const CategoriesScreen = ({ navigation }) => {

  const renderGridItem = (itemData) => {
    return (
      <View style={styles.gridItem}>
        <Text>{itemData.item.title}</Text>
      </View>
    )
  }

  return (
    // <FlatList 
    //   contentContainerStyle={styles.list}
    //   data={CATEGORIES} 
    //   renderItem={renderGridItem} 
    // />
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.list}>
        {
          CATEGORIES.map((item) => (
            <View style={styles.gridItem} key={item.id}>
              <Text>{item.title}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
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
    backgroundColor: 'green',
    borderRadius: 8
  }
})

export default CategoriesScreen