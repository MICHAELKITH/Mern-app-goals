const express = require('express');
const router = express.Router();
const {getGoal, setGoal, updateGoal, deleteGoal} = require("../controllers/goalController")

router.route('/').get(getGoal).post(setGoal)

router.route('/:id').put(updateGoal).delete(deleteGoal)


module.exports = router;