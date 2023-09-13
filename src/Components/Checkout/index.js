import { useContext, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext, CartDispacthContext } from "../../Contexts/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispacthContext);

  const navigateTo = useNavigate();
  let day = "";

  switch (new Date().getDay()) {
    case 0:
      day = "Lunes";
      break;
    case 1:
      day = "Lunes";
      break;
    case 2:
      day = "Martes";
      break;
    case 3:
      day = "Miercoles";
      break;
    case 4:
      day = "Jueves";
      break;
    case 5:
      day = "Viernes";
      break;
    case 6:
      day = "Sabado";
      break;
    default:
      break;
  }

  const [form, setForm] = useState({
    timeFrom: "17:00",
    timeTo: "20:30",
    day: day,
    payment: "Efectivo",
  });

  const formatQuantity = (quantity, priceType) => {
    let totalQuantity = 0;
    switch (priceType) {
      case "100G":
        totalQuantity = quantity * 100;
        if (totalQuantity >= 1000) {
          return totalQuantity / 1000 + "KG";
        } else {
          return totalQuantity + "G";
        }
      case "¼KG":
        totalQuantity = quantity * 250;
        if (totalQuantity >= 1000) {
          return totalQuantity / 1000 + "KG";
        } else {
          return totalQuantity + "G";
        }
      case "½KG":
        totalQuantity = quantity * 500;
        if (totalQuantity >= 1000) {
          return totalQuantity / 1000 + "KG";
        } else {
          return totalQuantity + "G";
        }
      case "KG":
        totalQuantity = quantity;
        return totalQuantity + "KG";
      case "2KG":
        totalQuantity = quantity * 2;
        return totalQuantity + "KG";
      case "U":
        totalQuantity = quantity;
        return totalQuantity + "U";
      default:
        break;
    }
  };

  const encodeForm = () => {
    const formString = `Pedido de *${form.name}*
Para el dia *${form.day}* entre las *${form.timeFrom}* y las *${form.timeTo}*
Dirección: *${form.street} ${form.streetNumber}${form.apartment ? " " + form.apartment + "*" : "*"}
Telefono: *${form.phone}*
Forma de pago: *${form.payment}*
${form.instructions ? "Instrucciones para la entrega: " + form.instructions : ""}
${cart
  .map((product) => {
    return `${formatQuantity(product.quant, product.priceType)} ${product.name}`;
  })
  .join("\n")}`;

    return encodeURIComponent(formString);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedText = encodeForm();
    window.open(`https://wa.me/543413062939?text=${encodedText}`);
    dispatch({ type: "CLEAR" });
    navigateTo("/compra-finalizada");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 style={{ marginTop: "90px" }} className="form-header">
          Datos y direccion
        </h2>
        <div className="form-field" style={{ marginTop: "15px" }}>
          <label htmlFor="name">Nombre y apellido</label>
          <input
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            name="name"
            id="name"
            placeholder="Nombre de quien recibe"
            required
          />
        </div>
        <div style={{ display: "flex", maxWidth: "300px", margin: "auto", padding: "0px" }}>
          <div className="form-field">
            <label htmlFor="street">Calle</label>
            <input
              onChange={(e) => setForm({ ...form, street: e.target.value })}
              type="text"
              name="street"
              id="street"
              required
            />
          </div>
          <div className="form-field" style={{ width: "20%" }}>
            <label htmlFor="streetNumber">Número</label>
            <input
              onChange={(e) => setForm({ ...form, streetNumber: e.target.value })}
              type="text"
              name="streetNumber"
              id="streetNumber"
              required
            />
          </div>
          <div className="form-field" style={{ width: "20%" }}>
            <label htmlFor="apartment">Depto.</label>
            <input
              onChange={(e) => setForm({ ...form, apartment: e.target.value })}
              type="text"
              name="apartment"
              id="apartment"
            />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="phone">Telefono</label>
          <input
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            type="tel"
            name="phone"
            id="phone"
            placeholder="Telefono de quien recibe"
            required
          />
        </div>
        <h2 className="form-header">Dia y hora de entrega</h2>
        <p>Nuestros horarios de entrega son</p>
        <p>Lunes a Viernes: 17 a 20:30</p>
        <p>Sabados: 10 a 14</p>
        <p>
          Si necesitas coordinar la entrega para algun horario especifico dentro de ese rango especificalo acá
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "left",
            width: "60%",
            margin: "auto",
          }}
        >
          <div onChange={(e) => setForm({ ...form, day: e.target.value })}>
            <input type="radio" name="day" id="day-monday" value="Lunes" defaultChecked={day === "Lunes"} />
            <label htmlFor="day-lunes"> Lunes</label> <br />
            <input
              type="radio"
              name="day"
              id="day-tuesday"
              value="Martes"
              defaultChecked={day === "Martes"}
            />
            <label htmlFor="day-tuesday"> Martes</label> <br />
            <input
              type="radio"
              name="day"
              id="day-wednesday"
              value="Miercoles"
              defaultChecked={day === "Miercoles"}
            />
            <label htmlFor="day-wednesday"> Miercoles</label> <br />
            <input
              type="radio"
              name="day"
              id="day-thursday"
              value="Jueves"
              defaultChecked={day === "Jueves"}
            />
            <label htmlFor="day-thursday"> Jueves</label> <br />
            <input
              type="radio"
              name="day"
              id="day-friday"
              value="Viernes"
              defaultChecked={day === "Viernes"}
            />
            <label htmlFor="day-friday"> Viernes</label> <br />
            <input
              type="radio"
              name="day"
              id="day-saturday"
              value="Sabado"
              defaultChecked={day === "Sabado"}
            />
            <label htmlFor="day-saturday"> Sábado</label> <br />
          </div>
          <div style={{ textAlign: "right" }}>
            <div>
              <label htmlFor="time-from">De </label>
              <input
                onChange={(e) => setForm({ ...form, timeFrom: e.target.value })}
                type="time"
                name="time"
                id="time-from"
                defaultValue="17:00"
              />
            </div>
            <div>
              <label htmlFor="time-to">A </label>
              <input
                onChange={(e) => setForm({ ...form, timeTo: e.target.value })}
                type="time"
                name="time"
                id="time-to"
                defaultValue="20:30"
              />
            </div>
          </div>
        </div>
        <div className="form-field" style={{ marginTop: "30px" }}>
          <label htmlFor="instructions">Instrucciones para la entrega</label>
          <textarea
            onChange={(e) => setForm({ ...form, instructions: e.target.value })}
            name="instructions"
            id="instructions"
            cols="50"
            rows="5"
            placeholder="Ejemplo: No anda el portero, llamar"
          ></textarea>
        </div>
        <h2 className="form-header">Forma de pago</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "left",
            width: "60%",
            margin: "auto",
          }}
        >
          <div onChange={(e) => setForm({ ...form, payment: e.target.value })}>
            <input type="radio" name="payment" id="cash" value="Efectivo" defaultChecked />
            <label htmlFor="cash"> Efectivo</label> <br />
            <input type="radio" name="payment" id="wallet" value="Billetera Santa Fe" />
            <label htmlFor="wallet"> Billetera Santa Fe</label> <br />
            <input type="radio" name="payment" id="transfer" value="Transferencia" />
            <label htmlFor="transfer"> Transferencia</label> <br />
            <input type="radio" name="payment" id="card" value="Tarjeta de Crédito/Debito" />
            <label htmlFor="card"> Tarjeta de Credito/Debito</label> <br />
          </div>
        </div>
        <button type="submit">
          Completar pedido en WhatsApp
          <FaWhatsapp />
        </button>
      </form>
    </div>
  );
};

export default Checkout;
