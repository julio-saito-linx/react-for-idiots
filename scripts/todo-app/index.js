'use strict';

var Fluxxor = require('fluxxor');
var actions = require('./actions');
var React = require('react');
var TodoStore = require('./stores/todo-store');
var TodoReactApp = require('./todo-react-app');

var stores = {
  TodoStore: new TodoStore()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

module.exports = function() {
	React.render(<TodoReactApp flux={flux} />, document.body);
};
