import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";


function Navbar(){

    const { cartItems } = useCart();


    const quantity = cartItems.reduce(
        (total,item)=> total + item.quantity,
        0
    );


    return(

        <nav className="navbar">


            <h2 className="logo">
                🍴 My Restaurant
            </h2>


            <div className="nav-buttons">


                <Link to="/">
                    <button>
                        Home
                    </button>
                </Link>


                <Link to="/menu">
                    <button>
                        Menu
                    </button>
                </Link>


                <Link to="/cart">
                    <button>
                        Cart 🛒 ({quantity})
                    </button>
                </Link>


            </div>


        </nav>

    );

}


export default Navbar;