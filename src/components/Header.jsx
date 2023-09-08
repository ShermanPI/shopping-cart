import { useState } from 'react'
import Filters from './Filters'
import './header.css'

export default function Header () {
  const [filterToggle, setToggle] = useState(false)

  return (
    <header>
      <h3>Shopping Cart 🛒</h3>
      <Filters />
    </header>
  )
}
