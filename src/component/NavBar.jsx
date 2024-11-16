import flipkartLogo from '../assets/flipkartLogo.svg'
import '../styles/nav-bar.css'
import user from '../assets/user.png'
import cart from '../assets/cart.png'
export default function NavBar(){
    return(
        <div className="nav-bar">
            <div className="cmp-logo">
                <img src={flipkartLogo} alt="logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder='Search for Products,Brands and More'/>
            </div>
            <div className="cart">
                <img src={cart} alt="cart" />
                <h4>Cart</h4>
            </div>
            <div className="user">
                <img src={user} alt="user" />
            </div>
        </div>
    );
}