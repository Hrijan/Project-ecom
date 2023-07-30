import React, { useState } from 'react'

export default function Picks({ allCate }) {
    const [filter, setFilter] = useState('smartphones')
    const filtered = allCate.filter(item => item.category === filter)
    console.log(filtered);
    const handleOption = (e) => setFilter(e.target.value)

  return (
    <div>
      <h2>Popular Picks for ... </h2>
      <select defaultValue={filter} onChange={handleOption}>
        <option selected value="smartphone">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skincare</option>
        <option value="groceries">Groceries</option>
      </select>
      <div className="filtered-cate">
        <ul>
            {filtered.map(a => (
                <li>{a.title}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}
