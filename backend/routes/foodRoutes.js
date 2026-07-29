const express = require("express");

const router = express.Router();


const {
    addFood,
    getFoods
} = require("../controllers/foodController");



// POST - Add Food
router.post("/", addFood);


// GET - Get All Foods
router.get("/", getFoods);



module.exports = router;