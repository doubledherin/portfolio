import React from "react"
import Drumkit from "./Drumkit/index.jsx"

export default Projects = React.createClass({
    render() {
        return (
            <div className="projects">
                <Drumkit />
                <div className="project">Project!</div>
                <div className="project">Project!</div>
                <div className="project">Project!</div>
                <div className="project">Project!</div>
                <div className="project">Project!</div>
            </div>
        )
    }
})
