// Applied class demo to this project
// Item Model


var Backbone =  require ('backbone');

module.exports = Backbone.Model.extend({
// POST photos and STORE photos
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/myFrame',
// ID of each Photo
  idAttribute: '_id';
// Each has caption, image(url), #likes
  defaults: {
    caption: "Big Ern",
    image: "http://www.fillmurray.com/300/400",
    likes: 0
  },
  initialize: function () {
    console.log("Sucess");
  }
});
