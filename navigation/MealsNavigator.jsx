import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FiltersScreen from '../screens/FiltersScreen'
import FavouritesScreen from '../screens/FavouritesScreen'

import colors from '../constants/colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderFaveBtn from '../components/HeaderFaveBtn'

const Stack = createStackNavigator()
const Tabs = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator()

const CategoriesStack = () => {
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
              <Item title="Favourite" iconName="star-outline" onPress={() => {
                alert('mark as fave')
              }} />
            </HeaderButtons>
          )
        })}

      />
    </Stack.Navigator>
  )
} 

const FavouritesStack = () => {
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
        name="Favourites" 
        component={FavouritesScreen} 
        options={{ title: 'Your Favourites' }}
      />
      <Stack.Screen 
        name="MealDetail" 
        component={MealDetailScreen} 
        options={({ route }) => ({ 
          title: route.params.mealTitle,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderFaveBtn}>
              <Item title="Favourite" iconName="star-outline" onPress={() => {
                alert('mark as fave')
              }} />
            </HeaderButtons>
          )
        })}

      />
    </Stack.Navigator>
  )
}

export default function MealsNavigator() {
  return (
    <Tabs.Navigator
      barStyle={{ backgroundColor: colors.black }}
      shifting={true}
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
      <Tabs.Screen name="FilterTab" component={FiltersScreen} options={{ 
        tabBarLabel: 'Filter',
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="filter" size={24} color={tabInfo.tabBarActiveTintColor} />
        },
        // tabBarColor: colors.primaryOpacity
      }}/>
      <Tabs.Screen name="HomeTab" component={CategoriesStack} options={{ 
        headerShown: false,
        tabBarLabel: 'Categories',
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="restaurant" size={24} />
        },
        // tabBarColor: colors.primary
      }} />
      <Tabs.Screen name="FavouritesTab" component={FavouritesStack} options={{ 
        tabBarLabel: 'Faves',
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="star" size={24} />
        },
        // tabBarColor: colors.black
      }} />
    </Tabs.Navigator>
  );
}