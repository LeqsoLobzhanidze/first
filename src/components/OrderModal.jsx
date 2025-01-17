import React, { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import "./OrderModal.css"

const OrderModal = () => {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Confirm Order</button>
      {isOpen && (
        <div className="modal">
          <h2>Order Confirmed</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.quantity} x {item.name} - ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default OrderModal;