import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import banner from "../../Assets/frutasBanner.jpg";
import Item from "../../Assets/item.jpg";
import "./shoppingPage.css";
import { CartDispacthContext } from "../../Contexts/CartContext";

const ShoppingPage = ({ titulo, products }) => {
  const dispatch = useContext(CartDispacthContext);

  // const filterOptions = filtros
  // function toggleFilters() {
  //   document.getElementsByClassName('filterOptions')[0].classList.toggle('filterOptions--visible')
  //   document.getElementById('filtersArrow').classList.toggle('rotated')
  // }

  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="imgContainer shoppingPageBanner" id="imgContainer">
        <h2>{titulo}</h2>
        <img src={banner} alt="" />
      </div>
      <div className="filtersBar">
        <div className="filtersBar-header">
          <div className="searchBar alignCenter">
            <FaSearch />
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
          </div>
          {/* <div className='alignCenter' onClick={toggleFilters}>
            Filtros
            <FaChevronDown style={{alignSelf: 'flex-end'}} id='filtersArrow'/>
          </div> */}
        </div>
        {/* <div className='filterOptions'>
          {filterOptions.map( i => {
            return (
              <div>
                <input type="checkbox" id={i} name={i} value={i}/>
                <label htmlFor={i}>{i}</label>
              </div>
            )
          })}
        </div> 
        not using filter right now, might implement in the future*/}
      </div>
      <div className="itemsCarouselContainer">
        <div className="itemsContainer" style={{ flexWrap: "wrap" }}>
          {products.length === 0 && <h2 style={{ margin: "auto" }}>No hay productos para mostrar</h2>}
          {products
            .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            .map((i) => {
              return (
                <div className="itemContainer" id="items-container" style={{ width: "40%" }}>
                  <div className="item">
                    <img src={Item} alt={i.name} />
                    <h3>{i.name}</h3>
                    <p>
                      ${i.price} x {i.priceType}
                    </p>
                    <button onClick={() => dispatch({ type: "ADD", item: i })}>Añadir al carrito</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
