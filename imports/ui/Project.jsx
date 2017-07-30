import React from 'react';

// Project component - represents a single todo item
export default Project = React.createClass({
  render() {
    return (
        <Project className="project">
            { this.props.children }
        </Project>
    );
  }
})
