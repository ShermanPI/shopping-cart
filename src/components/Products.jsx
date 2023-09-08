import { AddToCartIcon } from './Icons'

export default function Products ({ products }) {
  return (
    products.map(el => {
      return (
        <li key={el.id} className='product-item'>
          <div className='product-image'>
            <img src={el.thumbnail} alt={`image of ${el.title}`} />
          </div>

          <div className='item-info'>
            <div>
              <b>{el.title}</b>
              <p>US${el.price}</p>
            </div>

            <AddToCartIcon className='cart-icon' />
          </div>
        </li>
      )
    })
  )
}
