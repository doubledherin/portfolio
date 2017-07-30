import React from 'react'

export default Key = React.createClass({
    const { keyNumber, key, sound } = this.props
    render() {
        return (
            <div data-key={ keyNumber } className="key">
                <keyboard>{ key }</keyboard>
                <span className="sound">{ sound }</span>
            </div>            
        )
    }
})
