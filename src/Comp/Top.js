import React, { useEffect, useState } from 'react'
import productService from '../services/products'
import Search from './Search'
import Navbar from './Navbar'
import FilteredPro from './FilteredPro'
import Home from '../Pages/Home'
import Mens from '../Pages/Mens'
import Womens from '../Pages/Womens'
import Kids from '../Pages/Kids'
import { Route, Routes } from 'react-router-dom'
import Features from '../Pages/Features'

export default function Top() {

    const [search, setSearch] = useState('')
    const [products, setProducts] = useState([])
    let eClass = ''

    useEffect(() => {
        productService
            .getAll()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    if (search === ''){
      eClass = 'hidden'
    }
    else{
      eClass = ''
    }

    const searchFilter = products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    const handleSearch = (e) => setSearch(e.target.value)

    return (
      <>
      <div className='top'>
        <div className="toplogo">
            <img src="" alt="abcd" />
        </div>
        <Search search={search} onChange={handleSearch}/>
        <Navbar />
        <FilteredPro extraClass={eClass} products={searchFilter} length={searchFilter.length}/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </>
    )
}
