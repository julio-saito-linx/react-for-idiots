
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

    return <span style={style} onClick={this.onClick}>{this.props.todo.text}</span>;
  },

  // 1. Your Views "Dispatch" "Actions"

  // A "dispatcher" is essentially an event system. It broadcasts events and
  // registers callbacks.
  onClick: function() {
    this.getFlux().actions.toggleTodo(this.props.todo);
  }
});

module.exports = TodoItem;
