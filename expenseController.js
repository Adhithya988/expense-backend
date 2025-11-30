const Expense = require("../models/expenseModel");

exports.addExpense = async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.json({ message: "Expense Added", expense });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getExpenses = async (req, res) => {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
};

exports.deleteExpense = async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense Deleted" });
};

exports.updateExpense = async (req, res) => {
    const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};
