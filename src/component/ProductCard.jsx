import { Link } from "react-router-dom";
import "../styles/product-card.css"
export default function ProductCard({ id, title, imgurl, rating, price, discount, handleCartCount}) {
    return (
        <div className="product-card">
            
            <Link to={`/product/${id}`}>
                <img src={imgurl} alt={id} />
                <span className="product-content">
                    <h4>{title}</h4>
                    <p>{rating} ⭐</p>
                    <h3>₹{Math.floor(price)}</h3>
                    <p>{discount}% off</p>
                </span>
            </Link>
            <span  className="card-btn">
                <button id="add-to-cart" onClick={()=>handleCartCount(id)}>ADD TO CART</button>
                <button id="buy-now">BUY NOW</button>
            </span>
        </div>
    );
}