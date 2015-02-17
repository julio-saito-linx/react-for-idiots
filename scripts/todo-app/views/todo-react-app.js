
// React Application

// Let's build out our UI with React.

// Our top-level Application component will use the FluxMixin as well as the
// StoreWatchMixin to make our lives a bit easier. The component will iterate
// over the array of todos and emit a TodoItem component for each one.

// We'll also add a quick form for adding new todo items, and a button for
// clearing completed todos.

var React = require('react');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var TodoItem = require('./components/todo-item');
var TodoReactApp = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("TodoStore")],

  getInitialState: function() {
    return { newTodoText: "" };
  },

  getStateFromFlux: function() {
    var flux = this.getFlux();
    // Our entire state is made up of the TodoStore data. In a larger
    // application, you will likely return data from multiple stores, e.g.:
    //
    //   return {
    //     todoData: flux.store("TodoStore").getState(),
    //     userData: flux.store("UserStore").getData(),
    //     fooBarData: flux.store("FooBarStore").someMoreData()
    //   };
    return flux.store("TodoStore").getState();
  },

  render: function() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">

            <h2>Todo List</h2>
            <div className="row">
              <ul className="col-xs-12">
                {this.state.todos.map(function(todo, i) {
                  return <li key={i}><TodoItem todo={todo} /></li>;
                })}
              </ul>
            </div>
            <div className="row">
              <form onSubmit={this.onSubmitForm}>

                <div className="row">
                  <div className="col-xs-9">
                    <input  type        = "text"
                            size        = "30"
                            placeholder = "New Todo"
                            className   = "form-control"
                            value       = {this.state.newTodoText}
                            onChange    = {this.handleTodoTextChange} />
                  </div>
                  <div className="col-xs-3">
                    <input  type      = "submit"
                            id        = "addTodoSubmit"
                            className = "btn btn-default"
                            value     = "Add Todo" />
                  </div>
                </div>

              </form>
            </div>
            <div className="row">
              <button id        = "clearCompletedTodos"
                      className = "btn btn-default"
                      onClick   = {this.clearCompletedTodos}> Clear Completed </button>
            </div>

          </div>
        </div>

      </div>
    );
  },

  // 4. Your View Responds to the "Change" Event

  // Now we need to display the list. Our view will completely re-render when
  // the list changes. That's not a typo.

  // First, let's listen for the change event from our ListStore when the
  // component "mounts," which is when the component is first created

  handleTodoTextChange: function(e) {
    this.setState({newTodoText: e.target.value});
  },

  onSubmitForm: function(e) {
    e.preventDefault();
    if (this.state.newTodoText.trim()) {
      this.getFlux().actions.addTodo(this.state.newTodoText);
      this.setState({newTodoText: ""});
    }
  },

  clearCompletedTodos: function(e) {
    this.getFlux().actions.clearTodos();
  }
});

module.exports = TodoReactApp;
