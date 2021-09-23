import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../constants/colors'

const CategoryGridItem = ({ item, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => { onSelect(item.title, item.id) }} style={styles.gridItem} activeOpacity={0.8}>
      <View>
        <Text style={styles.gridItemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    margin: 8,
    padding: 16,
    backgroundColor: colors.primary,
    borderRadius: 8
  },
  gridItemText: {
    color: colors.white,
    fontSize: 14
  }
})

export default CategoryGridItem