import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import { ProductPage } from "./pages/productpage/ProductPage";
import { PRODUCTS } from "./Products";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:productId" element={<ProductPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
