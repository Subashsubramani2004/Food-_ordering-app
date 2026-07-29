import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";


function Cart(){

const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalAmount
}=useCart();


const navigate=useNavigate();



return(

<div className="cart-page">


<h1>Your Cart</h1>


{
cartItems.length===0 ?

<h2 className="empty">
Your Cart is Empty
</h2>


:

<>


{
cartItems.map(item=>(


<div className="cart-card" key={item._id}>


<div>

<h2>
{item.name}
</h2>


<p>
Price: ₹{item.price}
</p>


</div>



<div className="quantity">


<button onClick={()=>decreaseQuantity(item._id)}>
-
</button>


<span>
{item.quantity}
</span>


<button onClick={()=>increaseQuantity(item._id)}>
+
</button>


</div>



<p>
Subtotal:
₹{item.price * item.quantity}
</p>



<button
className="remove"
onClick={()=>removeItem(item._id)}
>
Remove
</button>


</div>


))

}


<div className="cart-total">

<h2>
Total Amount: ₹{totalAmount}
</h2>


<button
onClick={()=>navigate("/checkout")}
>
Proceed To Payment
</button>


</div>


</>


}


</div>


);


}


export default Cart;