import React, { useState } from "react";
import "../Css/MainPage.css";
import notification from "../images/notificationsvg.svg";
import filter from "../images/filter.svg";
import { GiDonerKebab } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";
import { FaBurger } from "react-icons/fa6";
import { RiDrinksFill } from "react-icons/ri";
import menuData from "../Components/menuData";

function MainPage() {
  const [activeCategory, setActiveCategory] = useState("lavaash");
  const [searchTerm, setSearchTerm] = useState("");

  const allProducts = Object.values(menuData).flat();

  const productsToDisplay = searchTerm
    ? allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : menuData[activeCategory];

  // Обработчик изменения категории
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchTerm(""); // Сбросить поиск при смене категории
  };

  return (
    <div className="container-main-page">
      {/* Верхняя часть страницы */}
      <div className="cont-noti-search">
        <div className="div-zagolovok">
          <h1>Delicious food for you</h1>
        </div>
        <div className="cont-search">
          <div className="div-search">
            <input
              className="inp-search"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img className="img-filt" src={filter} alt="" width={20} height={20} />
          </div>
          <div>
            <img className="img-noti" src={notification} alt="" />
          </div>
        </div>
      </div>

      {/* Секция категорий */}
      <div className="content">
        <div className="div-cat">
          <ul>
            <li onClick={() => handleCategoryChange("lavaash")}>
              <div className={`icon-circle ${activeCategory === "lavaash" ? "active" : ""}`}>
                <GiDonerKebab />
              </div>
              <span>Lavash</span>
            </li>
            <li onClick={() => handleCategoryChange("pizza")}>
              <div className={`icon-circle ${activeCategory === "pizza" ? "active" : ""}`}>
                <FaPizzaSlice />
              </div>
              <span>Pizza</span>
            </li>
            <li onClick={() => handleCategoryChange("burger")}>
              <div className={`icon-circle ${activeCategory === "burger" ? "active" : ""}`}>
                <FaBurger />
              </div>
              <span>Burger</span>
            </li>
            <li onClick={() => handleCategoryChange("drinks")}>
              <div className={`icon-circle ${activeCategory === "drinks" ? "active" : ""}`}>
                <RiDrinksFill />
              </div>
              <span>Drinks</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="div-products">
        <div className="products-grid">
          {productsToDisplay.length > 0 ? (
            productsToDisplay.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                {/* <p>{product.description}</p> */}
                <span>${product.price.toFixed(2)}</span>
              </div>
            ))
          ) : (
            <p className="no-product-text">Product not found!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
