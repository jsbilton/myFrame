//applied class demo to my project

var $ = require ('jquery');
var PictureCollection = require ('./pictureCollection');
var PictureModel = require ('./pictureModel');

$(document).ready(function () {
  page.init();

  window.pictureCollection = new PictureCollection();
  console.log("before fetch: ", pictureCollection);
  var myModel = new PictureModel({});
  myModel.save();
  pictureCollection.fetch().then(function (collectionData){
    console.log(pictureCollection);

  });

});
