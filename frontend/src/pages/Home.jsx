import { useNavigate } from "react-router-dom";
import "./Home.css";


function Home(){

    const navigate = useNavigate();


    return(

        <div className="home-container">


            <div className="hero">


                <h1>
                    Welcome to Our Restaurant
                </h1>


                <p>
                    Delicious food made with fresh ingredients.
                    Order your favourite meals now.
                </p>



                <button
                onClick={()=>navigate("/menu")}
                >

                    Shop Now

                </button>


            </div>


        </div>

    );

}


export default Home;