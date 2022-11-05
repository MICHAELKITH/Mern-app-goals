//@desc get goals 
const asyncHandler = require("express-async-handler")
const getGoal = asyncHandler(async(req, res) =>{
 
    res.status(200).json({  data: 'Get goals'})
})

const setGoal = asyncHandler(async(req, res) =>{
    if (!req.body.text){
        res.status(400)
        throw new Error("Please add the message")}
    res.status(200).json({  data: 'Get goals'})
})

const updateGoal = asyncHandler(async(req, res) =>{
    res.status(200).json({data : `Update goal  goals ${req.params.id}`})
})


const deleteGoal = asyncHandler(async(req, res) =>{
    res.status(200).json({data : `delete goal  goals ${req.params.id}`})
})

module.exports={
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}