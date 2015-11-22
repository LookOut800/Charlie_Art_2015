require('normalize.css');
require('styles/App.css');

import React from 'react';

let HeaderImage = require('../images/Charles_Wave.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={HeaderImage} alt="Charles Generator" />
        <div className="content">
        <img src={HeaderImage} alt="Charles Generator" />

        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
