import React, { createContext, useState } from 'react'

export const FilterContext = createContext()
function FilterProvider({children}) {
    const [categories, setCategories] = useState("All")

    function handleFilter(category) {
        setCategories(category)
    }
  return (
    <FilterContext.Provider value={{categories,handleFilter}}>
        {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider