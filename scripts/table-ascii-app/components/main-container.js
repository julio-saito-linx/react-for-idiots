var React = require('react');
var Title = require('./title');
var MyList = require('./my-list');

var MainContainer = React.createClass({
    render() {
        return (
            <div>
                <hr/>
                <Title name={this.props.date} />
                <hr/>
                <MyList data={this.props.data} />
            </div>
        );
    }
});

module.exports = MainContainer;