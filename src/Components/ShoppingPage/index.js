import { FaChevronDown, FaSearch } from 'react-icons/fa'
import banner from '../../Assets/frutasBanner.jpg'
import Item from '../../Assets/item.jpg'
import './shoppingPage.css'

const ShoppingPage = ({titulo, filtros, products}) => {

  const filterOptions = filtros

  function toggleFilters() {
    document.getElementsByClassName('filterOptions')[0].classList.toggle('filterOptions--visible')
    document.getElementById('filtersArrow').classList.toggle('rotated')
  }

  return (
    <div>
      <div className='imgContainer shoppingPageBanner' id='imgContainer'>
        <h2>{titulo}</h2>
        <img src={banner} alt="" />
      </div>
      <div className='filtersBar'>
        <div className='filtersBar-header'>
          <div className='searchBar alignCenter'>
            <FaSearch />
            <input type="text" />
          </div>
          <div className='alignCenter' onClick={toggleFilters}>
            Filtros
            <FaChevronDown style={{alignSelf: 'flex-end'}} id='filtersArrow'/>
          </div>
        </div>
        <div className='filterOptions'>
          {filterOptions.map( i => {
            return (
              <div>
                <input type="checkbox" id={i} name={i} value={i}/>
                <label htmlFor={i}>{i}</label>
              </div>
            )
          })}
        </div>
      </div>
      <div className='itemsCarouselContainer'>
        <div className='itemsContainer' style={{flexWrap: 'wrap'}}>
          {products.map( i => {
            return (
              <div className='itemContainer' id='items-container' style={{width: '40%'}}>
                <div className='item'>
                  <img src={Item} alt={i.name} />
                  <h3>{i.name}</h3>
                  <p>${i.price} x {i.priceType}</p>
                  <button>Añadir al carrito</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ShoppingPage