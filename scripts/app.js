'use strict';

var React = require('react');
var MyList = require('./components/my-list');

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

// DATA
var dateNow = (new Date()).toString();
var listData = [
    ['a', '1'],
    ['b', '2'],
    ['c', '3'],
];

var App = React.createClass({
    render() {
        return (
            <div>
                <hr/>
                <Title name={dateNow} />
                <hr/>
                <MyList data={listData} />
            </div>
        );
    }
});

module.exports = App;