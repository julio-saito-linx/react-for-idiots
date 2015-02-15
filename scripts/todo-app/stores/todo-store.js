// 2. Your "Store" Responds to Dispatched Events

// Like Flux, "store" is just a word Facebook made up. For our application, we
// need a specific collection of logic and data for the list. This describes
// our store. We'll call it a TodoStore.

// -----------------------------------------------------------------------------

// Key Concept 1: A store is not a model. A store contains models.

// Key concept 2: A store is the only thing in your application that knows how
// to update data. This is the most important part of Flux. The event we
// dispatched doesn't know how to add or remove items.

// -----------------------------------------------------------------------------

// If, for example, a different part of your application needed to keep track
// of some image and their metadata, you'd make another store, and call it
// ImageStore. A store represents a single "DOMAIN" of your application. If
// your application is large, the domains will probably be obvious to you
// already. If your application is small, you probably only need one store.

// Only your stores are allowed to register dispatcher callbacks! Your views
// should never call AppDispatcher.register. The dispatcher only exists to
// send messages from views to stores. Your views will respond to a different
// kind of event.


var Fluxxor = require('fluxxor');
var constants = require('../constants');

var TodoStore = Fluxxor.createStore({
  initialize: function() {

    // Actual collection of model data
    this.todos = [];

    this.bindActions(
      constants.ADD_TODO   , this.onAddTodo,
      constants.TOGGLE_TODO, this.onToggleTodo,
      constants.CLEAR_TODOS, this.onClearTodos
    );
  },

  onAddTodo: function(payload) {
    this.todos.push({text: payload.text, complete: false});

    // 3. Your Store Emits a "Change" Event

    // We're almost there! Now that your data is definitely changed, we need to
    // tell the world.

    // Your store emits an event, but not using the dispatcher. This is confusing,
    // but it's the Flux way. Let's give our store the ability to trigger events.

    // Key Concept: We don't pass the newest item when we trigger. Our views
    // only care that "SOMETHING CHANGED". Let's keep following the data to
    // understand why.

    this.emit("change");
  },

  onToggleTodo: function(payload) {
    payload.todo.complete = !payload.todo.complete;
    this.emit("change");
  },

  onClearTodos: function() {
    this.todos = this.todos.filter(function(todo) {
      return !todo.complete;
    });
    this.emit("change");
  },

  getState: function() {
    return {
      todos: this.todos
    };
  }
});

module.exports = TodoStore;
