import { FaCheck, FaTimes } from "react-icons/fa";
import itemImg from "../../../Assets/item.jpg";

const CreateModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="products-modal__background">
      <div className="products-modal__container">
        <h2 className="products-modal__header">Crear</h2>
        <form onSubmit={onConfirm}>
          <div className="products-modal__imgContainer">
            <img src={itemImg} alt="" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div className="products-modal__formField">
                <label htmlFor="name">Nombre</label>
                <div>
                  <input type="text" name="name" id="name" required />
                </div>
              </div>
              <div className="products-modal__formField">
                <label htmlFor="name">Descripción</label>
                <div>
                  <textarea name="description" id="description" />
                </div>
              </div>
              <div className="products-modal__formField">
                <label htmlFor="price">Precio</label>
                <div>
                  <input type="number" name="price" id="price" />
                  <label style={{ margin: "10px" }} htmlFor="priceType">
                    X
                  </label>
                  <select name="priceType" id="priceType">
                    <optgroup>
                      <option value="100G">100G</option>
                      <option value="¼KG">¼KG</option>
                      <option value="½KG">½KG</option>
                      <option value="KG">KG</option>
                      <option value="U">U</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="products-modal__formField">
                <label htmlFor="category">Categoria</label>
                <div>
                  <select name="category" id="category" required>
                    <optgroup>
                      <option value="Bolsones">Bolsones</option>
                      <option value="Frutas">Frutas</option>
                      <option value="Verduras">Verduras</option>
                      <option value="Dietetica">Dietetica</option>
                      <option value="Congelados">Congelados</option>
                      <option value="Almacen">Almacen</option>
                      <option value="Bebidas">Bebidas</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="products-modal__formField">
                <div>
                  <input type="checkbox" name="oferta" id="oferta" />
                  <label htmlFor="oferta">Oferta</label>
                </div>
              </div>
              <div className="products-modal__formField">
                <label htmlFor="file">Imagen</label>
                <div>
                  <input type="file" name="itemImg" id="itemImg" />
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <button type="submit">
              <FaCheck />
            </button>
            <button onClick={onCancel} style={{ backgroundColor: "red " }}>
              <FaTimes />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;
