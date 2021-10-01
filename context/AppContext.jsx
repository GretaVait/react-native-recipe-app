import React, { useState, createContext } from 'react'

export const AppContext = createContext()

import { MEALS } from '../data/dummy-data'

export const AppProvider = (props) => {

  const [filtersData, setFiltersData] = useState({
    glutenFree: false, 
    vegan: false,
    vegeterian: false,
    lactoseFree: false
  })

  const [favouriteMeals, setFavouriteMeals] = useState([])

  const [filteredMeals, setFilteredMeals] = useState([])

  const saveFilters = (values) => {
    setFiltersData(values)
  };

  const saveFilteredMeals = (values) => {
    setFilteredMeals(values)
  }

  const saveFavouriteMeal = (values) => {
    setFavouriteMeals(values)
  }

  return (
    <AppContext.Provider value={{ filtersData, saveFilters, filteredMeals, saveFilteredMeals, favouriteMeals, saveFavouriteMeal }}>
      {props.children}
    </AppContext.Provider>
  )
}