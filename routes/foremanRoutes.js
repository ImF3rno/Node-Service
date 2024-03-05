const express = require('express');
const authController = require('./../controlls/authController');
const foremanController=require('./../controlls/foremanController')
const router = express.Router();

router.use(authController.protect);

router.route('/')
    .post(foremanController.createForeman)
router.route('/:id')
    .patch(
        authController.restrictTo('admin'),
        foremanController.updateForeman,
        )
    .delete(
        authController.restrictTo('admin'),
        foremanController.deleteForeman
    )

module.exports = router;