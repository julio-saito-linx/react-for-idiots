'use strict';

var Fluxxor = require('fluxxor');
var actions = require('./actions');
var React = require('react');
var TodoStore = require('./stores/todo-store');
var TodoReactApp = require('./views/todo-react-app');

var stores = {
  TodoStore: new TodoStore()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});


// Bringing it Together

// Now that we have a Flux instance and all our components are defined, we can
// finally render our app. We'll put it inside a div in our HTML with an ID of
// "app".

module.exports = function() {
	React.render(<TodoReactApp flux={flux} />, document.body);
};
