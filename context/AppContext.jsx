import React, { useState, createContext } from 'react'

export const AppContext = createContext()

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

  return (
    <AppContext.Provider value={{ filtersData, saveFilters, filteredMeals, saveFilteredMeals }}>
      {props.children}
    </AppContext.Provider>
  )
}