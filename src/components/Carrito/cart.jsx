import React from "react";
import "./cart.css";

const Cart = ({ cartItems, onClose, clearCart }) => {
  // Función para formatear los precios
  const formatPrice = (price) => {
    return price.toLocaleString("es-CL"); // Formato chileno con puntos para miles
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`cart cart-open`}>
      <span className="close-button" onClick={onClose}>&times;</span>
      <h2 className="cart-title">Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
                <p className="cart-item-price">Total: ${formatPrice(item.price * item.quantity)}</p> {/* Formato aplicado */}
              </div>
            </div>
          ))}
          <div className="cart-total">Total: ${formatPrice(totalPrice)}</div> {/* Formato aplicado */}
          <button className="checkout-button">Finalizar Compra</button>
          {/* Botón para vaciar el carrito */}
          <button className="clear-cart-button" onClick={clearCart}>
            Vaciar Carrito
          </button>
        </>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;
