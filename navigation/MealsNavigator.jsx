import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import colors from '../constants/colors'

const Stack = createStackNavigator()

export default function MealsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: colors.black
        },
      }}
    >
      <Stack.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{ title: 'Categories' }}
      />
      <Stack.Screen 
        name="CategoryMeals" 
        component={CategoryMealsScreen} 
        options={{ title: 'Category Meals' }}
      />
      <Stack.Screen 
        name="MealDetail" 
        component={MealDetailScreen} 
        options={{ title: 'Meal Detail' }}
      />
    </Stack.Navigator>
  );
}