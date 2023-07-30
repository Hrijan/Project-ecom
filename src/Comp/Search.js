import React from 'react'

export default function Search({ search, onChange }) {
  return (
    <div className="topmid">
        <form>
          <input value={search} placeholder='Search for items' type="search" className="search" onChange={onChange} id='searchbar'/>
        </form>
    </div>
  )
}
