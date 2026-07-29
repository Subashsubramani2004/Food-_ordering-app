const express = require("express");
const router = express.Router();

const {
  placeOrder,
} = require("../controllers/orderController");

// Place Order
router.post("/", placeOrder);

module.exports = router;