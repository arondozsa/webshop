import React from 'react'

export default function Search() {
  let [search, setSearch] = React.useState('')

  return (
    <input type = 'text' value = {search} onChange={e => setSearch(e.target.value)}/>
  )
}