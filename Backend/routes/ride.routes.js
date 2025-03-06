const express=require("express");
const router=express.Router();
const {body}=require("express-validator");
const {query}=require("express-validator");
const rideController=require("../controllers/ride.controller");
const authMiddleware=require("../middlewares/auth.middleware")
router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup Address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid Destination Address'),
    body('vehicleType').isString().isIn(['car', 'bike', 'auto']).withMessage('Invalid Vehicle Type'),
    rideController.createRide
);
 
router.get('/getfare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup Address'),
    query('destination').isString().isLength({min:3}).withMessage('Invalid Destination Address'),
    rideController.getFare
);
router.post('/confirm',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.confirmRide
)

router.get('/start-ride',
    authMiddleware.authCaptain,
    query('rideId').isMongoId().withMessage('Invalid ride Id'),
    query('otp').isString().isLength({min:6,max:6}).withMessage('Invalid otp'),
    rideController.startRide
)
router.post('/end-ride',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride Id'),
    rideController.endRide
)
// Export the router
module.exports = router;