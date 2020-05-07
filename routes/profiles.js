const express = require('express');
const {
    getProfiles,
    getProfile,
    registerProfile,
    updateProfile,
    deleteProfile,
    loginProfile
} = require('../handlers/profiles');

const {
    protect
} = require('../middleware/protect');

const router = express.Router();

router.route('/').get(getProfiles);

router.route('/login').post(loginProfile);

router.route('/register').post(registerProfile);

router.route('/me').get(protect, getProfile);

router.route('/:id').put(protect, updateProfile).delete(protect, deleteProfile);

module.exports = router;