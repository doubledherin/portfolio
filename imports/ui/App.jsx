import React from 'react';
import Header from './Header/index.jsx'
import Projects from './Projects/index.jsx';
import Drumkit from './Projects/Drumkit/index.jsx';

export default App = React.createClass({

  render() {
    return (
      <div className="container">
          <Header />
          <Projects />
      </div>
    );
  }
})
