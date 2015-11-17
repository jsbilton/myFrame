//Thanks to Blake for some guidance to the best of his ability on th

var $ = require ('jquery');
var PictureCollection = require ('./pictureCollection');
var PictureModel = require ('./pictureModel');

module.exports = {
  init: function () {
    this.styling();
    this.events();
  },
  styling: function () {
    pictureCollection.fetch().then(function(collectionData){
      console.log(pictureCollection);
    })






  },
  events: function () {

    $('form').on('click','#submitBtn', function(e){
      e.preventDefault();
      var imgUrl = $('#')
      var imgCaption = $('#')
      var imgLikes = $('#')
  })



  }






  }
