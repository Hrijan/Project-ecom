import React from 'react'

export default function FilteredPro({ products, length, extraClass }) {
  if (length > 3){
    return (
        <div className={`${extraClass} searching`}>
          <h3>Too many products to show, specify your search</h3>
        </div>
      )
  }
  else if (length  === 0 ){
    return (
        <div className={`${extraClass} searching`}>
          <h3>No products matching the search</h3>
        </div>
      )
  }
  else{
    return (
        <div className={`${extraClass} searching`}>
          <ul>
            {products.map((a) => (
                <li className='searchlast'>{a.title}</li>
            ))}
          </ul>
        </div>
      )
  }

}
