import React from 'react'
import { SearchContext } from './SearchContext'

export default function Search() {
  let { search, setSearch } = React.useContext(SearchContext)

  return (
    <input type = 'text' value = {search} onChange={e => setSearch(e.target.value)}/>
  )
}