import React from 'react'
import { Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import colors from '../constants/colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderFaveBtn from '../components/HeaderFaveBtn'

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
        options={({ route }) => ({ title: route.params.categoryTitle })}
      />
      <Stack.Screen 
        name="MealDetail" 
        component={MealDetailScreen} 
        options={({ route }) => ({ 
          title: route.params.mealTitle,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderFaveBtn}>
              <Item title="Favourite" iconName="ios-star" onPress={() => {
                alert('mark as fave')
              }} />
            </HeaderButtons>
          )
        })}
      />
    </Stack.Navigator>
  );
}