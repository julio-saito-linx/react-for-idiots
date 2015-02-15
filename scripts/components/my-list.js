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
            // define class
            var tdClassName = '';
            if (tdData !== ' ') {
                tdClassName = 'hasData';
            }
            // add 'td'
            allTds.push(<td className={tdClassName}>{tdData}</td>);

        });

        return  <tr>
                    {allTds}
                </tr>;
    },

    render: function() {
        return  <div>
                    <h3>ASCII table</h3>
                    <table className='myList'>
                        {this.allLines()}
                    </table>
                </div>;
  }
});

module.exports = MyList;