import Badge from "@mui/material/Badge";
import flipkartLogo from '../assets/flipkartLogo.svg'
import '../styles/nav-bar.css'
import user from '../assets/user.png'
import cart from '../assets/cart.png'
export default function NavBar({ cartCount, floatingMessage }) {
    return (
        <div className="nav-bar">
            {
                floatingMessage && (
                    <div className="floating-sms">
                        Product added to cart successfully!
                    </div>
                )
            }
            <div className="cmp-logo">
                <img src={flipkartLogo} alt="logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder='Search for Products,Brands and More' />
            </div>
            <div className="cart">
                <Badge badgeContent={cartCount.length} color="primary">
                    <img src={cart} alt="cart" />
                    {/* <h4>Cart</h4> */}
                </Badge>
            </div>
            <div className="user">
                <img src={user} alt="user" />
            </div>
        </div>
    );
}