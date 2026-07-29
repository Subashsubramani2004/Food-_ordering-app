import { useCart } from "../context/CartContext";


function Checkout(){


const {
    cartItems,
    totalAmount
}=useCart();



const handlePayment=()=>{

    alert(
        "Payment feature will be added later to this website"
    );

};



return(

<div>


<h1>Checkout</h1>



<h2>Order Summary</h2>



{
cartItems.map((item)=>(

<div key={item._id}>

<p>
{item.name} x {item.quantity}
</p>


<p>
₹{item.price * item.quantity}
</p>


</div>

))

}



<hr/>


<h2>
Total Amount: ₹{totalAmount}
</h2>



<h2>
Payment Method
</h2>



<button onClick={handlePayment}>

Online Payment

</button>


<p>
Payment feature will be added later.
</p>



</div>

);


}


export default Checkout;