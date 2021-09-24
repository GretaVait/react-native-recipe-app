// Base
import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
// Data
import { MEALS } from '../data/dummy-data'
// Const
import colors from '../constants/colors'

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId

  const selectedMeal = MEALS.find(meal => meal.id === mealId)
  
  return (
    <View style={styles.screen}>
      <ScrollView>
        <ImageBackground source={{ uri: selectedMeal.imageUrl }} resizeMode="cover" style={styles.cardImage}>
          <View style={styles.imageOverlay} />
          <Text style={styles.duration}>{selectedMeal.duration} Min</Text>
        </ImageBackground>


        <View style={styles.content}>
          <View style={styles.contentItem}>
            <Text style={styles.title}>{selectedMeal.title}</Text>
          </View>

          <View style={styles.contentItem}>
            <Text style={styles.title}>Ingredients</Text>
            {
              selectedMeal.ingredients.map((ingredient, index) => (
                <Text style={styles.listItem} key={index}><Text style={styles.bullet}>{'\u2022'}</Text> {ingredient}</Text>
              ))
            }
          </View>

          <View style={styles.contentItem}>
            <Text style={styles.title}>Preparation</Text>
            {
              selectedMeal.steps.map((step, index) => (
                <Text style={styles.listItem} key={index}><Text style={styles.bullet}>{'\u2022'}</Text> {step}</Text>
              ))
            }
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  cardImage: {
    position: 'relative',
    height: 240,
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
  duration: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: colors.primaryOpacity,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    color: colors.white
  },
  content: {
    paddingTop: 32,
    paddingHorizontal: 16
  },
  contentItem: {
    marginBottom: 32
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black
  },
  bullet: {
    color: colors.primary
  },
  listItem: {
    fontSize: 12,
    color: colors.grey,
    marginTop: 8
  }
})

export default MealDetailScreen