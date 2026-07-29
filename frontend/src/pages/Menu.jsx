import { useEffect, useState } from "react";
import { getFoods } from "../services/foodService";
import FoodCard from "../components/FoodCard";
import "./Menu.css";


function Menu() {

    const [foods, setFoods] = useState([]);


    useEffect(() => {

        fetchFoods();

    }, []);



    const fetchFoods = async () => {

        try {

            const data = await getFoods();

            setFoods(data);

        } catch (error) {

            console.log(error);

        }

    };



    return (

        <div className="menu-page">


            <h1>
                Our Menu
            </h1>


            <p className="menu-description">
                Choose your favourite dishes and enjoy delicious food.
            </p>



            <div className="food-container">


                {
                    foods.map((food) => (

                        <FoodCard
                            key={food._id}
                            food={food}
                        />

                    ))
                }


            </div>


        </div>

    );

}


export default Menu;