const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveredirectUrl } = require("../middleeware.js");
const userController = require("../controllers/users.js");
const filterController = require("../controllers/filter.js");

router.route("/signup").get(userController.renderSignupForm).post(wrapAsync(userController.signup));

router.route("/login").get(userController.renderLoginForm).post(saveredirectUrl, passport.authenticate("local",{failureRedirect: "/login", failureFlash: true}) , userController.login );

router.get("/logout", userController.logout);

router.get('/amazing-pool',wrapAsync( filterController.amazing));
router.get('/farms', wrapAsync( filterController.farm));
router.get('/design', wrapAsync( filterController.design));
router.get('/rooms', wrapAsync( filterController.room));
router.get('/treehouses', wrapAsync( filterController.treehouse));
router.get('/beach', wrapAsync( filterController.beach));
router.get('/domes', wrapAsync( filterController.domes));
router.get('/top-of-the-world', wrapAsync( filterController.topof));
router.get('/trending', wrapAsync( filterController.trending));
router.get('/top-cities', wrapAsync( filterController.topCities));
router.get('/camping', wrapAsync( filterController.camping));
router.get('/arctic', wrapAsync( filterController.arctic));
router.get('/boats', wrapAsync( filterController.boats));
router.get('/creative-spaces',wrapAsync( filterController.creative));
router.get('/skiing', wrapAsync(filterController.skiing));
router.get('/towers', wrapAsync( filterController.towers));
router.get('/camper-vans', wrapAsync( filterController.campervan));

module.exports = router;