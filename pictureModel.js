// Applied class demo to this project
// Item Model


var Backbone =  require ('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/myFrame',
  idAttribute: '';
  defaults: {
    // photo: "http://www.fillmurray.com/300/400",
    // task: "Generic Task";
    // isComplete: false
  },
  initialize: function () {

  }
});
