import React from "react"

export default Key = React.createClass({
    render() {
        const { keyNumber, keyName, sound } = this.props
        const keys = document.querySelectorAll(".key")
        keys.forEach(key => {
            console.log("key: ", key)
            key.addEventListener("transitionend", this.removeTransition)
        })
        return (
            <div data-key={ keyNumber } className="key">
                <keyboard>{ keyName }</keyboard>
                <span className="sound">{ sound }</span>
            </div>
        )
    }
})
