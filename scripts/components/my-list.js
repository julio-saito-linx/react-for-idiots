var React = require('react');

var MyList = React.createClass({

    allLines: function() {
        var all = [];
        for (var i = 0; i < this.props.data.length; i++) {
            var item  = this.props.data[i];
            all.push(this.newLine(item));
        }
        return all;
    },

    newLine: function (lineItem) {
        var allTds = [];
        lineItem.forEach(function(tdData) {
            allTds.push(<td>{tdData}</td>);
        });

        return  <tr>
                    {allTds}
                </tr>;
    },

    render: function() {
        return  <table className='myList'>
                    {this.allLines()}
                </table>;
  }
});

module.exports = MyList;