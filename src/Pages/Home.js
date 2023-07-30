import React, { useEffect, useState } from 'react'
import productService from '../services/products'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Picks from '../Comp/Picks';

export default function Home() {

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    productService
        .getAll()
        .then(response => {
            setAllProducts(response)
        })
        .catch(error => {
            console.error(error);
        })
}, [])

  const showProducts = allProducts.filter(item => item.rating >= 4.7)
  console.log(showProducts);


  return (
    <>
    <div className='tabled'>
      <div className="carousel">
        <OwlCarousel className='owl-theme' loop margin={10} items={1} autoplay autoplayHoverPause stagePadding={-10} dots={false}>
          {showProducts.map(a => 
              <div className="carousel-item">
                <img src={a.thumbnail} alt={a.title} />
              </div>
          )}
        </OwlCarousel>
      </div>
      <div className='tablecate'>
        <div className="tabletop">
          <Link to={'/'}><img src={'https://i.dummyjson.com/data/products/1/1.jpg'} alt="" className='tophalf' /></Link>
          <div className="category tophalf">
            <div className="overlay"></div>
            <Link to={'/'}><h3>Smartphones</h3></Link>
          </div>
          <Link to={'/'}><img src={'https://i.dummyjson.com/data/products/2/2.jpg'} alt="" className='tophalf' /></Link>
        </div>
        <div className="tablelow">
          <div className="category tophalf">
            <div className="overlay"></div>
            <Link to={'/'}><h3>Laptops</h3></Link>
          </div>
          <Link to={'/'}><img src={'https://i.dummyjson.com/data/products/4/1.jpg'} alt="" className='tophalf' /></Link>
          <div className="category tophalf">
            <div className="overlay"></div>
            <Link to={'/'}><h3>Fragrances</h3></Link>
          </div>
        </div>
      </div>
    </div>

    <Picks allCate={allProducts}/>
    </>
  )
}
