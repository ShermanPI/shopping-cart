import { useState } from 'react'

export default function useFilter () {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 1000
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
            (
              filters.category === 'all' ||
              product.category === filters.category
            )
      )
    })
  }

  return {
    filterProducts
  }
}
