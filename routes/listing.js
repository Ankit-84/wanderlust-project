const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleeware.js");
const listingcontroller = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage })

router.route("/").get(wrapAsync(listingcontroller.index)).post(isLoggedIn,  upload.single("listing[image]"),validateListing , wrapAsync( listingcontroller.newListing));

//new
router.get("/new",isLoggedIn, listingcontroller.renderNewForm);

router.route("/:id").get(wrapAsync(listingcontroller.showListing)).put(isLoggedIn, isOwner,upload.single("listing[image]"), validateListing,  wrapAsync( listingcontroller.updateListing)).delete(isLoggedIn,isOwner, wrapAsync( listingcontroller.deleteListing));

//edit
router.get("/:id/edit" ,isLoggedIn,isOwner, wrapAsync( listingcontroller.editListing));

//search
router.post("/search", wrapAsync( listingcontroller.searchListing));

module.exports = router;