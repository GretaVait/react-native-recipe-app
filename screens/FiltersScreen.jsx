import React, { useEffect, useCallback, useContext } from 'react'
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native'
import { useState } from 'react/cjs/react.development'
import colors from '../constants/colors'
import { AppContext } from '../context/AppContext'

const FiltersScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegeterian, setIsVegeterian] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const { filtersData, saveFilters } = useContext(AppContext)

  useEffect(() => {
    saveFilters({ 
      ...filtersData, 
      glutenFree: isGlutenFree, 
      vegan: isVegan,
      vegeterian: isVegeterian,
      lactoseFree: isLactoseFree
    })
  }, [isGlutenFree, isVegan, isVegeterian, isLactoseFree])

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>

        <FilterSwitch 
          label="Gluten-free"
          filterValue={isGlutenFree}
          setFilterValue={setIsGlutenFree}
        />

        <FilterSwitch 
          label="Vegan"
          filterValue={isVegan}
          setFilterValue={setIsVegan}
        />

        <FilterSwitch 
          label="Vegeterian"
          filterValue={isVegeterian}
          setFilterValue={setIsVegeterian}
        />

        <FilterSwitch 
          label="Lactose Free"
          filterValue={isLactoseFree}
          setFilterValue={setIsLactoseFree}
        />
      </View>
    </ScrollView>
  )
}

const FilterSwitch = ({ label, filterValue, setFilterValue }) => {

  return (
    <View style={[styles.filterSwitch, { opacity: filterValue ? 1 : 0.7 }]}>
      <Text style={styles.label}>{label}</Text>
      <Switch value={filterValue} onValueChange={prevState => setFilterValue(prevState)}  trackColor={{ false: colors.white, true: colors.white }} thumbColor={colors.black} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 48
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 32
  },
  filterSwitch: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white
  }
})

export default FiltersScreen