import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product__container">
      <div class="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div class="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <div className="product">
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  );
}

export default Product;
