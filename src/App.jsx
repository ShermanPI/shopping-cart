import './App.css'
import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products'
import useFilter from './hooks/useFilter'
import Header from './components/Header'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilter()

  return (
    <>
      <Header />
      <ul className='products-container'>
        <Products products={filterProducts(products)} />
      </ul>
    </>
  )
}

export default App
