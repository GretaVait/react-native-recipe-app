import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FavouritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The faves screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default FavouritesScreen