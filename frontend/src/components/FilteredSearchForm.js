import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { filter } from 'minimatch'

const FilteredSearchForm = ({ Users }) => {

  // finds all the categories to be added to the page as clickable links
  const createTags = Users.map((user) => {
    return user.username
  })

  const tagsArray = createTags.flat()
  const allTags = [...new Set(tagsArray)]

  const allTagsLabeled = allTags.map((tag) => {
    return { value: tag, label: tag }
  })

  function handleSelect(selectedItems) {
    if (selectedItems === null) return Users([])
    Users([...selectedItems])
    console.log(...selectedItems)
  }


  return <Select
    isMulti
    name="tags"
    options={allTagsLabeled}
    onChange={handleSelect}
    className="basic-multi-select"
    classNamePrefix="select"
    placeholder="Search for your Friends here..."

  />
}
export default FilteredSearchForm