const express = require('express');
const serviceController = require('./../controlls/serviceController');
const authController = require('./../controlls/authController');
const router = express.Router();

router.use(authController.protect);
router.use(authController.restrictTo('admin'));

router.route('/')
    .get(serviceController.getAllServices)
    .post(
        serviceController.checkBody,
        serviceController.createService
    );

router.route('/:id')
    .get(serviceController.getService)
    .patch(serviceController.updateService)
    .delete(serviceController.deleteService);

module.exports = router;
