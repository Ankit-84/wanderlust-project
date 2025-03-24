const Listing = require("../models/listing");

module.exports.amazing = async(req, res) => {
    const allListings = await Listing.find({filter : "Amazing Pool"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.farm = async(req, res) => {
    const allListings = await Listing.find({filter : "Farms"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.design = async(req, res) => {
    const allListings = await Listing.find({filter : "Design"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.room = async(req, res) => {
    const allListings = await Listing.find({filter : "Rooms"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.treehouse = async(req, res) => {
    const allListings = await Listing.find({filter : "Treehouses"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.beach = async(req, res) => {
    const allListings = await Listing.find({filter : "Beach"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.domes = async(req, res) => {
    const allListings = await Listing.find({filter : "Domes"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.topof = async(req, res) => {
    const allListings = await Listing.find({filter : "Top of the world"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.trending = async(req, res) => {
    const allListings = await Listing.find({filter : "Trending"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.topCities = async(req, res) => {
    const allListings = await Listing.find({filter : "Top cities"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.camping = async(req, res) => {
    const allListings = await Listing.find({filter : "Camping"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.arctic = async(req, res) => {
    const allListings = await Listing.find({filter : "Arctic"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.boats = async(req, res) => {
    const allListings = await Listing.find({filter : "Boats"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.creative = async(req, res) => {
    const allListings = await Listing.find({filter : "Creative spaces"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.skiing =  async(req, res) => {
    const allListings = await Listing.find({filter : "Skiing"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.towers = async(req, res) => {
    const allListings = await Listing.find({filter : "Towers"});
    res.render("listing/index.ejs", { allListings });
};

module.exports.campervan = async(req, res) => {
    const allListings = await Listing.find({filter : "Camper vans"});
    res.render("listing/index.ejs", { allListings });
};