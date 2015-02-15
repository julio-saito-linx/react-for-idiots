var React = require('react');

var Title = React.createClass({
  render: function() {
    return <header>
        <h1>React for idiots</h1>
        <hr/>
        <label>Date:</label>
        <span>{this.props.name}</span>
    </header>;
  }
});

module.exports = Title;