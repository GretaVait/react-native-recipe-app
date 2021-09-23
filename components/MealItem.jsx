// Base
import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
// Const
import colors from '../constants/colors'

const MealItem = ({ itemData, onSelectMeal }) => {
  return (
    <TouchableOpacity onPress={onSelectMeal} activeOpacity={0.8}>
      <View style={styles.card}>
        <ImageBackground source={{ uri: itemData.item.imageUrl }} resizeMode="cover" style={styles.cardImage}>
          <View style={styles.imageOverlay} />
          <View style={styles.banner}>
            <Text style={styles.title}>{itemData.item.title}</Text>
            <Text style={styles.subtitle}>{itemData.item.affordability} | {itemData.item.complexity} | {itemData.item.duration} min</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 16,
  },
  cardImage: {
    position: 'relative',
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
    height: 200,
    borderRadius: 8,
    overflow: 'hidden'
  },
  imageOverlay: {
    position: 'absolute',
    flex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: colors.blackOpacity
  },
  banner: {
    backgroundColor: colors.primaryOpacity,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8
  },
  title: {
    color: colors.white,
    fontSize: 16
  },
  subtitle: {
    color: colors.white,
    fontSize: 12,
    textTransform: 'capitalize'
  },
})

export default MealItem