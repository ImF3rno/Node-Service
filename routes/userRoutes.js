const express=require('express');
const router=express.Router({margeParams:true});
const authController=require('./../controlls/authController')

router.post('/signup',authController.signup)
router.post('/login',authController.login)

module.exports=router;