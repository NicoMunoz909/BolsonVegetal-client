import React from "react";
import "./Categories.css";

const Categories = (props) => {
  const categories = [
    "bolsones",
    "frutas",
    "verduras",
    "dietetica",
    "almacen",
    "congelados",
    "bebidas",
    "ofertas",
  ];

  return (
    <div>
      <h2>{props.title}</h2>
      <div className="categories">
        {categories.map((i, index) => {
          return (
            <div className="category" key={index}>
              <a href={i}>
                <img src={`https://placehold.co/200x100?text=${i}&font=pt-sans`} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
