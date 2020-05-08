const express = require('express');
const {
    getProfiles,
    getProfile,
    registerProfile,
    updateProfile,
    deleteProfile,
    loginProfile,
    logoutProfile
} = require('../handlers/profiles');

const {
    protect
} = require('../middleware/protect');

const router = express.Router();

router.route('/').get(getProfiles);

router.route('/login').post(loginProfile);

router.route('/logout').get(logoutProfile);

router.route('/register').post(registerProfile);

router.route('/me').get(protect, getProfile);

router.route('/update').put(protect, updateProfile)

router.route('/delete').delete(protect, deleteProfile);

module.exports = router;