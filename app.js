//Thanks to Blake for some guidance to the best of his ability on th

var $ = require ('jquery');
var PictureCollection = require ('./pictureCollection');
var PictureModel = require ('./pictureModel');

var page = {
  init: function () {
    page.styling();
    page.events();
  },

  initStyling: function () {
    pictureCollection.fetch().then(function(collectionData){
      console.log(pictureCollection);
      // need to loop through
      _.forEach(collectionData, function (el, idx, arr){
        $('showMeThePhotos').append(<div class = "onePhoto">
        + el._.id
        +'>'
        + '<h2>'
        + el.caption
        + </h2>
        + 'img src ="'
        + el.image
        +'">'
        )
      })
    })






  },
  initEvents: function () {

    $('form').on('click','#submitBtn', function(e){
      e.preventDefault();
      var imgCaption = $('#captionInput')val.();
      var imgUrl = $('#photoInput')val.();

      var newPictureModel = new PictureModel({
        caption: captionNote,
        image: imageUrl

      });
      newPictureModel.save();
      $('#captionInput').val('');
      $('#photoInput').val('');
      $('.showMeThePhotos').prepend('<div class = "onePhoto">'
        + '<h2>'
        + newPictureModel.get('caption')
        + '</h2>'
        +'<img src="'
        + newPictureModel.get('image')
        +'">'
        + '</div>')
    });

  })



  }






  }
