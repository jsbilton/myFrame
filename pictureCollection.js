var Backbone = require('backbone');
var PictureModel = require('./pictureModel');

modeul.exports = Backbone.Collection.extend({
  url: "http://tiny-tiny.herokuapp.com/collections/myFrame",
  model: PictureModel
});



// applied class demo to my project
// this is a bb collection
