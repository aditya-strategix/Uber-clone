const express=require("express");
const router=express.Router();
const userController=require("../controllers/user.controller")
const{body}=require("express-validator")
const authMiddleware=require("../middlewares/auth.middleware");

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstName').isLength({min:3}).withMessage('First name should be atleast 3 characters'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long')
],
userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long')

],
userController.loginUser)

router.get('/profile',authMiddleware.authUser,userController.getUserProfile);

router.get('/logout',authMiddleware.authUser,userController.logoutUser);
module.exports=router