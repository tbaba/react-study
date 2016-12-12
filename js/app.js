var React    = require('react'),
    ReactDOM = require('react-dom');

(function(d){
  console.log('loaded')

  var Hello = React.createClass({
    render: function() {
      return (
        <div className="Hello">
          Hello React world!! by {this.props.name}
        </div>
      );
    }
  });

  ReactDOM.render(<Hello name="tbaba"/>, d.getElementById('content'))
})(document);
