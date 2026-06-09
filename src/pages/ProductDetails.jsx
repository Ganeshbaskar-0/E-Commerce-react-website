import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductById } from "../data/products";
import { Navigate } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function ProductDetails()
{
    const {addToCart , cartItems} = useCart()

    const {id} = useParams();
    const [product , setProduct] = useState(null)

    useEffect(()=>{
        const foundproduct = getProductsbyid(id)
        console.log(foundproduct)


    if(!foundproduct){
        return Navigate("/")
    }
    setProduct(foundproduct)

    },[id])
    if(!product)
    {
        return <h1>Loading...</h1>
    }

    const productInCart = cartItems.find((item)=> item.id === product.id)
    const productQ = productInCart ? `(${productInCart.quantity})` : ""
    
    return(

        <div className="page">
            <div className="container">
                <div className="product-detail">
                    <div className="product-detail-image">
                     <img src={product.image} alt={product.name} />
                     </div>
                     <div className="product-detail-content">
                     <h1 className="product-detail-name">{product.name}</h1>
                     <p className="product-detail-price">${product.price}</p>
                     <p className="product-detail-description">{product.description}</p>
                     <button className="btn btn-primary" onClick={()=>addToCart(product.id)}>Add to cart { productQ}</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}