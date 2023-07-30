import React from 'react'
import Navs from '../Navs'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className='navbars'>
          <ul>
              {Navs.map((a) => (
                  <li className='navbutton' key={a.id}><Link to={a.link}>{a.name}</Link></li>
              ))}
          </ul>
      </div>
    </>
  )
}
