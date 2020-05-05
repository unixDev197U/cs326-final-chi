const express = require('express');
const {
    getProfiles,
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile
} = require('../handlers/profiles');

const router = express.Router();

router.use((request, response, next) => {
    response.header("Content-Type", "application/json");
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "*");
    next();
});

router.route('/').get(getProfiles).post(createProfile);

router.route('/:id').get(getProfile).put(updateProfile).delete(deleteProfile);

module.exports = router;