const Location = require('../models/Location.model');

const locationController = {
    createLocation: async (req, res) => {
        const newLocation = new Location(req.body);
        try {
            const savedLocation = await newLocation.save();
            res.status(200).json({ savedLocation });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    getLocations: async (req, res) => {
        try {
            const locations = await Location.find();
            return res.status(200).json(locations);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    deleteAllLocation: async (req, res) => {
        try {
            const product = await Location.remove();
            res.status(200).json({message: true, product:product});
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = locationController;