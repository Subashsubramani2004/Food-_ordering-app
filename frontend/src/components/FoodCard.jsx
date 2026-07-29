import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./FoodCard.css";


function FoodCard({ food }) {


    const { addToCart } = useCart();

    const navigate = useNavigate();



    const handleAddCart = () => {

        addToCart(food);

        navigate("/cart");

    };



    return (

        <div className="food-card">


            <img
                src={
                    food.image ||
                    "https://via.placeholder.com/300x200"
                }
                alt={food.name}
                className="food-image"
            />



            <div className="food-details">


                <h2>
                    {food.name}
                </h2>


                <p>
                    {food.description}
                </p>


                <p className="category">
                    {food.category}
                </p>



                <div className="price-row">


                    <h3>
                        ₹{food.price}
                    </h3>



                    <button
                    onClick={handleAddCart}
                    >
                        Add to Cart
                    </button>


                </div>


            </div>


        </div>

    );

}


export default FoodCard;