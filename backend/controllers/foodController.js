const Food = require("../models/Food");


// Add Food Item
const addFood = async(req,res)=>{

    try{

        const food = await Food.create(req.body);

        res.status(201).json({
            message:"Food Added Successfully",
            food
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// Get All Food Items
const getFoods = async(req,res)=>{

    try{

        const foods = await Food.find();

        res.status(200).json(foods);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



module.exports = {
    addFood,
    getFoods
};