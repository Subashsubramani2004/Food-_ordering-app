import axios from "axios";


const API_URL = "http://localhost:5000/api/foods";


// Get all foods

export const getFoods = async()=>{

    const response = await axios.get(API_URL);

    return response.data;

};