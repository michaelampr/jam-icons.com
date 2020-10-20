import React, { useRef, useContext } from "react"
import styles from "./filters-bar.module.css"
import { AppContext } from "@/context/AppContext"

const FiltersBar = () => {
  const {
    setCategory,
    category,
    setSizeFilter,
    sizeFilter,
    setTypeFilter,
    typeFilter,
  } = useContext(AppContext)

  const activeRef = useRef()

  const categorizeIcons = category => {
    setCategory(category)
  }

  const filterIconsBySize = size => {
    setSizeFilter(size)
  }

  const filterIconsByType = type => {
    setTypeFilter(type)
  }

  const isCategoryActive = current => current === category
  const isSizeFilterActive = size => size === sizeFilter
  const isTypeFilterActive = type => type === typeFilter

  return (
    <nav className={` flex flex-wrap justify-between items-center mb-8`}>
      <section className={`${styles.categories} flex flex-wrap items-start`}>
        <button
          onClick={() => categorizeIcons("all")}
          className={isCategoryActive("all") ? styles.active : ""}
        >
          All
        </button>
        <button
          onClick={() => categorizeIcons("web")}
          className={isCategoryActive("web") ? styles.active : ""}
        >
          Web
        </button>
        <button
          onClick={() => categorizeIcons("arrows")}
          className={isCategoryActive("arrows") ? styles.active : ""}
        >
          Arrows
        </button>
        <button
          onClick={() => categorizeIcons("player")}
          className={isCategoryActive("player") ? styles.active : ""}
        >
          Player
        </button>
        <button
          onClick={() => (categorizeIcons("text") ? styles.active : "")}
          className={isCategoryActive("text") ? styles.active : ""}
        >
          Text
        </button>
        <button
          onClick={() => categorizeIcons("social")}
          className={isCategoryActive("social") ? styles.active : ""}
        >
          Social
        </button>
      </section>

      <section
        className={`${styles.filters}  items-center justify-end flex-1 hidden md:flex`}
      >
        <button
          onClick={() => filterIconsBySize(16)}
          className={isSizeFilterActive(16) ? styles.active : ""}
        >
          16px
        </button>
        <button
          onClick={() => filterIconsBySize(24)}
          className={isSizeFilterActive(24) ? styles.active : ""}
        >
          24px
        </button>
        <button
          onClick={() => filterIconsBySize(32)}
          className={isSizeFilterActive(32) ? styles.active : ""}
        >
          32px
        </button>
        <button
          onClick={() => filterIconsByType("both")}
          className={isTypeFilterActive("both") ? styles.active : ""}
          data-tooltip="Stroke / Fill"
        >
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 1.5a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h3.744L6 1.5H2.25zm0-1.5h7.5A2.25 2.25 0 0 1 12 2.25v7.5A2.25 2.25 0 0 1 9.75 12h-7.5A2.25 2.25 0 0 1 0 9.75v-7.5A2.25 2.25 0 0 1 2.25 0z"></path>
          </svg>
        </button>
        <button
          onClick={() => filterIconsByType("stroke")}
          className={isTypeFilterActive("stroke") ? styles.active : ""}
          data-tooltip="Stroke"
        >
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 1.5a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75h-7.5zm0-1.5h7.5A2.25 2.25 0 0 1 12 2.25v7.5A2.25 2.25 0 0 1 9.75 12h-7.5A2.25 2.25 0 0 1 0 9.75v-7.5A2.25 2.25 0 0 1 2.25 0z"></path>
          </svg>
        </button>
        <button
          onClick={() => filterIconsByType("fill")}
          className={isTypeFilterActive("fill") ? styles.active : ""}
          data-tooltip="Fill"
        >
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 0h7.5A2.25 2.25 0 0 1 12 2.25v7.5A2.25 2.25 0 0 1 9.75 12h-7.5A2.25 2.25 0 0 1 0 9.75v-7.5A2.25 2.25 0 0 1 2.25 0z"></path>
          </svg>
        </button>
      </section>

      <span className={styles.active} ref={activeRef}></span>
    </nav>
  )
}

export default FiltersBar
