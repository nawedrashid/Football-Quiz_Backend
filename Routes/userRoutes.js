const express = require("express");
const { userCheckHandler } = require("../Middleware/userCheckHandler");
const { User } = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const Router = express.Router();
const {authVerify} = require('../Middleware/authVerify') 

const secret = "abcd";

Router.route("/").get(async (req, res) => {
  try {
    const users = await User.find();
    if (users) return res.json({ success: true, users });
    return res.json({ success: false, message: "no user found" });
  } catch (err) {
    console.log(err.message);
  }
});

Router.route("/registration").post(userCheckHandler, async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    const userSave = await newUser.save();
    if (userSave) {
      return res
        .status(201)
        .json({ success: true, message: "Successfully Registered" });
    } else {
      return res
        .status(422)
        .json({ success: false, message: "Something went wrong" });
    }
  } catch (error) {
    console.log(error.message);
  }
});

Router.route("/login").post(async(req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, userExist.password);
    if (isMatch) {
      const token = await jwt.sign({ userId: userExist._id }, secret, {
        expiresIn: "24h",
      });
      return res.status(200).json({ success: true, userExist, token });
    } else {
      return res
        .status(422)
        .json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error.message);
  }
});

Router.route('/:userId').get(async(req,res) =>{
  try{
    const { userId } = req.params;
    const findUser = await User.findById(userId)
    if(findUser){
      return res.json({ success:true, findUser })
    }
    res.json({ success: false, message: "Invalid User" })
  }catch(error){
    console.log(error.message)
  }
})

Router.route('/userInfo')
        .post(authVerify,async(req,res) => {
            try{
                const {userId} = req.user
                if(userId){
                    const findUser = await User.findById(userId)
                    return res.json({success : true, userData : findUser})
                }
                return res.json({success : false , message :"User doesn't exist"})
            }catch(err){ 
                console.log(err.message)
            }
           
        })

Router.route('/:userId/topic/:topic/score/:score').post(async(req,res) =>{
  try{
    const { userId,topic,score } = req.params
    const findUser = await User.findById(userId)
    if(findUser){
      findUser.score = score
      findUser.topic = topic
      findUser.save()
      return res.status(200).json({ success:true, findUser })
    }
    res.status(422).json({ success: false, message: "Invalid User" })
  }catch(error){
    console.log(error.message)
  }
})

module.exports = Router