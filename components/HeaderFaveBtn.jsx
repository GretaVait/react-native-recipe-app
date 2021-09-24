// Base
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// Lib
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import colors from '../constants/colors'

const HeaderFaveBtn = (props) => {
  return (
    <HeaderButton 
      {...props} 
      IconComponent={Ionicons} 
      iconSize={24} 
      color={colors.grey} 
    />
  )
}

const styles = StyleSheet.create({})

export default HeaderFaveBtn