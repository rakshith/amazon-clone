import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";
function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basekt }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div class="checkoutProduct__info">
        <p class="checkoutProduct__title">{title}</p>
        <p class="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div class="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
