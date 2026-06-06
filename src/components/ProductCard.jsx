import { Link } from "react-router-dom"
export default  function ProductCard({product})
{
    return (
         <div className="product-card" >
                        <img src={product.image} className="product-image" alt={product.name}/>
                        <div className="product-card-content">
                            <h1 className="product-card-name">{product.name}</h1>
                            <h2 className="product-card-price">${product.price}</h2>
                            <div className="product-card-actions">
                            <Link className="btn btn-secondary" to={`/product/${product.id}`}>View details</Link>
                            <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                        </div>
    )
}