
var $ = require ('jquery');
var PictureCollection = require ('./pictureCollection');
var PictureModel = require ('./pictureModel');

$(document).ready(function () {

  var pictureCollection = new PictureCollection();
  console.log("before fetch: ", PictureCollection);
  var myModel = new PictureModel({});
  myModel.save();
  pictureCollection.fetch().then(function (collectionData){
    console.log(pictureCollection);

  });

});



//  Calvin DEMO  CODE for main.js
// var $ = require('jquery');
// var ItemCollection = require('./itemCollection');
// var ItemModel = require('./itemModel');
//
//
// $(document).ready(function () {
//
//   window.itemCollection = new ItemCollection();
//   console.log("before fetch: ", itemCollection);
//   var myModel = new ItemModel({task: "this is a cool task"});
//   myModel.save();
//   itemCollection.fetch().then(function (collectionData) {
//     console.log(itemCollection);
//
//   });
//
// });
