import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
export default  function ProductCard({product})
{
    const {addToCart , cartItems} = useCart()

    const productInCart = cartItems.find((item)=> item.id === product.id)
    const productQ = productInCart ? `(${productInCart.quantity})` : ""


    return (
         <div className="product-card" >
                        <img src={product.image} className="product-image" alt={product.name}/>
                        <div className="product-card-content">
                            <h1 className="product-card-name">{product.name}</h1>
                            <h2 className="product-card-price">${product.price}</h2>
                            <div className="product-card-actions">
                            <Link className="btn btn-secondary" to={`/product/${product.id}`}>View details</Link>
                            <button className="btn btn-primary" onClick={()=>addToCart(product.id)}>Add to Cart {productQ}</button>
                            </div>
                        </div>
                        </div>
    )
}