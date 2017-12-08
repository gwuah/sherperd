const keys = require("../config").keys
const Twit = require('twit');

module.exports = new Twit(keys);