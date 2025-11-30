// routes/expenseRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/expenseController");

router.post("/", controller.addExpense);
router.get("/", controller.getExpenses);
router.delete("/:id", controller.deleteExpense);
router.put("/:id", controller.updateExpense);

module.exports = router;
