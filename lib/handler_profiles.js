const ErrorResponse = require('./utils_errorresponse');
const asyncHandler = require('./middleware_async');
const Profile = require('./schema_profile');
// @desc    Get all profiles
// @route   GET /profiles
// @access  Public
exports.getProfiles = asyncHandler(async (req, res, next) => {
    const profiles = await Profile.find();
    res.status(200).json({
        success: true,
        count: profiles.length,
        data: profiles
    });
});
// @desc    Get single profile
// @route   GET /profiles/:id
// @access  Public
exports.getProfile = asyncHandler(async (req, res, next) => {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
        return next(new ErrorResponse(`Profile not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        data: profile
    });
});
// @desc    Create new profile
// @route   POST /profiles
// @access  Private
exports.createProfile = asyncHandler(async (req, res, next) => {
    const profile = await Profile.create(req.body);
    res.status(201).json({
        success: true,
        data: profile
    });
});
// @desc    Update profile
// @route   PUT /profiles/:id
// @access  Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
    const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!profile) {
        return next(new ErrorResponse(`Profile not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        data: profile
    });
});
// @desc    Delete profile
// @route   DELETE /profiles/:id
// @access  Private
exports.deleteProfile = asyncHandler(async (req, res, next) => {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) {
        return next(new ErrorResponse(`Profile not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        data: {}
    });
});
