import { IoConstruct } from "react-icons/io5";
import "./underConstruction.css";

const UnderConstruction = () => {
  return (
    <div className="underConstruction">
      <h1>Esta página aún esta en construcción</h1>
      <IoConstruct style={{ fontSize: "78px" }} />
      <a href="/">Volver al inicio</a>
    </div>
  );
};

export default UnderConstruction;
