import React, { useContext } from "react"
import { AppContext } from "@/context/AppContext"
import styles from "./searchbar.module.css"

const SearchBar = () => {
  const { setFilter, category } = useContext(AppContext)

  const filterList = ({ target }) => {
    setFilter(target.value)
  }

  const inputPlaceholder =
    category !== "all" ? `Search for ${category} icons` : "Search for icons"

  return (
    <section
      className={`${styles.searchBar} rounded-xl py-8 lg:py-16  px-5 lg:px-8 mb-8`}
    >
      <div className="flex justify-center">
        <input
          type="search"
          placeholder={inputPlaceholder}
          className="p-4 rounded-lg w-full lg:w-4/5 shadow focus:shadow-lg transition-all duration-300"
          onChange={filterList}
        />
      </div>
      <h1 className="text-gray-700 text-center font-semibold text-2xl lg:text-3xl mt-4">
        890+ Pixel perfect icons
      </h1>
    </section>
  )
}

export default SearchBar
