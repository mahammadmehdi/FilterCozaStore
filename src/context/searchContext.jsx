import React, { createContext, useState } from 'react'

export const SearchContext = createContext()
function SearchProvider({children}) {
    const [searchInput, setSearchInput] = useState("")
    function handleSearch(e) {
        setSearchInput(e.target.value)
    }
  return (
    <SearchContext.Provider value={{searchInput, handleSearch}}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider