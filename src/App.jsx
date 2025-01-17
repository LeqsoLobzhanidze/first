import React from "react";
import { CartProvider } from "./components/CartContext";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import OrderModal from "./components/OrderModal";
import "./App.css"

const App = () => {
  return (
    <CartProvider>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <section className="products">
            <h1>Desserts</h1>
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
          <Cart />
        </main>
      </div>
      <OrderModal />
    </CartProvider>
  );
};

const products = [
  { id: 1, name: "Waffle with Berries", price: 6.5, image: "1.png" },
  { id: 2, name: "Vanilla Bean Crème Brûlée", price: 7.0, image: "2.png" },
  { id: 3, name: "Macaron Mix of Five", price: 8.0, image: "3.png" },
  { id: 4, name: "Classic Tiramisu", price: 5.5, image: "4.png" },
  { id: 5, name: "Pistachio Baklava", price: 7.5, image: "5.png" },
  { id: 6, name: "Lemon Meringue Pie", price: 11.5, image: "6.png" },
  { id: 7, name: "Red Velvet Cake", price: 12., image: "7.png" },
  { id: 8, name: "Salted Caramel Brownie", price: 20.99, image: "8.png" },
  { id: 9, name: "Vanilla Panna Cotta", price: 5.6, image: "9.png" },
];

export default App;