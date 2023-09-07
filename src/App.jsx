import './App.css'
import { products } from './mocks/products.json'

function App () {
  return (
    <>
      <h3>Amazonas</h3>
      <ul className='products-container'>
        {products.map(el => {
          return (
            <li key={el.id} className='product-item'>
              <div className='product-image'>
                <img src={el.thumbnail} alt={`image of ${el.title}`} />
              </div>

              <div>
                <b>{el.title}</b>
                <p>US${el.price}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
