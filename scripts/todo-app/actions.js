// One More Thing: What The Hell Is An "Action Creator"?
// Remember, when we click our button, we dispatch a specific event:

// AppDispatcher.dispatch({
//     eventName: 'new-item',
//     newItem: { name: 'Samantha' }
// });

// Well, this can get pretty repetitious to type if many of your views need to
// trigger this event. Plus, all of your views need to know the specific
// object format. That's lame. Flux suggests an abstraction, called action
// creators, which just abstracts the above into a function.


var constants = require('./constants');
var actions = {
  addTodo: function(text) {
    this.dispatch(constants.ADD_TODO, {text: text});
  },

  toggleTodo: function(todo) {
    this.dispatch(constants.TOGGLE_TODO, {todo: todo});
  },

  selectTodo: function(todo) {
    this.dispatch(constants.SELECT_TODO, {todo: todo});
  },

  enableEditTodo: function(todo) {
    this.dispatch(constants.ENABLE_EDIT_TODO, {todo: todo});
  },

  clearTodos: function() {
    this.dispatch(constants.CLEAR_TODOS);
  }
};

module.exports = actions;
