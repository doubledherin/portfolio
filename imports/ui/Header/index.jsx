import React from 'react'

export default Header = React.createClass({
    render() {
        return (
            <div className="header">
                <div class="typewriter">
                    <h1>{ "<div>"}</h1>
                </div>
                <div class="typewriter">
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;Wendy Dherin, developer</h1>
                </div>
                <div class="typewriter">
                    <h1>{ "</div>"}</h1>
                </div>
            </div>
        )
    }
})
