var React = require('react');

var MyList = React.createClass({

    allLines: function() {
        var all = [];
        for (var i = 0; i < this.props.data.length; i++) {
            var item  = this.props.data[i];
            all.push(this.newLine(item[0], item[1]));
        }
        return all;
    },

    newLine: function (name, value) {
        return  <tr>
                    <td>
                        {name}
                    </td>
                    <td>
                        {value}
                    </td>
                </tr>;
    },

    render: function() {
        return  <table className='myList'>
                    {this.allLines()}
                </table>;
  }
});

module.exports = MyList;