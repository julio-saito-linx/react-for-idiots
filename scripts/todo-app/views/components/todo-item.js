
// The TodoItem component will display and style itself based on the completion
// of the todo, and will dispatch an action indicating its intent to toggle its
// completion state.

var React = require('react');

var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var TodoItem = React.createClass({
  mixins: [FluxMixin],

  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render: function() {
    var style = {
      textDecoration: this.props.todo.complete ? "line-through" : ""
    };

    return  <div id            = "todoItemContainer"
                 onClick       = {this.selectItem}
                 onDoubleClick = {this.enableEditOnItem}>

              <div className={this.getTodoItemClassName()}>
                <label>

                  <input  type     = "checkbox"
                          checked  = {this.props.todo.complete}
                          onChange = {this.checkBoxToggle}/>

                  <span style={style}>
                    {this.props.todo.text}
                  </span>

                </label>
              </div>
            </div>;
  },

  // 1. Your Views "Dispatch" "Actions"

  // A "dispatcher" is essentially an event system. It broadcasts events and
  // registers callbacks.
  checkBoxToggle: function() {
    this.getFlux().actions.toggleTodo(this.props.todo);
  },

  selectItem: function(e) {
    this.getFlux().actions.selectTodo(this.props.todo);
  },

  enableEditOnItem: function(e) {
    this.getFlux().actions.enableEditTodo(this.props.todo);
  },

  getTodoItemClassName: function() {
    if (this.props.todo.selected) {
      return "checkbox todoItemSelected";
    }
    return "checkbox";
  },

});

module.exports = TodoItem;
