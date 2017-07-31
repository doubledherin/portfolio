import React from 'react'

export default Thumbnails = React.createClass({
    render() {
        return (
            <div className="thumbnails">
                <div className="thumbnail drumkit"></div>
                <div className="thumbnail clock"></div>
                <div className="thumbnail css-variables"></div>
                <div className="thumbnail flex-displays"></div>
                <div className="thumbnail draw-pad"></div>
            </div>
        )
    }
})
