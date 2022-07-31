const express = require('express');
const { Quiz } = require('../Model/quizModel')
const { Quizzes } = require('../DB/QuizData')
const { User } = require('../Model/UserModel')
const Router = express.Router();

Router.route('/').post(async(req,res)=>{
    try{
        Quizzes.map(async(ele)=>{
            const quizReg = new Quiz(ele)
            const userSave = await quizReg.save()
        })
    }catch(err){
        console.log(err.message)
    }
}).get(async(req,res)=>{
    try{
        const getQuizData = await Quiz.find();
        if(getQuizData) return res.status(200).json({success:true,getQuizData})
        else return res.status(422).json({success:false,message:"failed to get data"})
    }catch(err){
        console.log(err.message)
    }
})

Router.route('/quizDashboard').get(async(req,res)=>{
    try{
        const getUserData = await User.find().select('username score -_id')
        return res.json({success:true, getUserData})
    }catch(err){
        console.log(err.message)
    }
})

module.exports = Router