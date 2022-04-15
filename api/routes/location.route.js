var express = require('express');
var router = express.Router();
const locationController = require('../controllers/location.controller')


/* GET PBs. */
router.get('/', locationController.getLocations);

/* Post PBs. */
router.post('/create-location', locationController.createLocation);

/* Delete PBs. */
router.delete('/delete-locations', locationController.deleteAllLocation);

module.exports = router;
