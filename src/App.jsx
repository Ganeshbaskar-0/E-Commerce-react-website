
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Checkout from "./pages/Checkout"
import Navbar from "./components/Navbar"
import AuthProvider from "./context/AuthContext"
import ProductDetails from "./pages/ProductDetails"
import CartProvider from "./context/CartContext"

export default function App()
{
    return (
        <div className="App">
            <AuthProvider>
            <CartProvider>
            <Navbar/>
            <Routes>
                <Route  path="/" element={<Home />}/>
                <Route  path="/auth" element={<Auth />}/>
                <Route  path="/checkout" element={<Checkout />}/>
                <Route  path="/product/:id" element={<ProductDetails />}/>
            </Routes>
            </CartProvider>
            </AuthProvider>

        </div>
    )
}
