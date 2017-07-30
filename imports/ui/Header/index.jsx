import React from "react"

export default Header = React.createClass({
    render() {
        const typewriter = (
            <div class="typewriter">
                <h1>{ "<div>"}</h1>
            </div>
            <div class="typewriter">
                <h1>&nbsp;&nbsp;&nbsp;&nbsp;Wendy Dherin, developer</h1>
            </div>
            <div class="typewriter">
                <h1>{ "</div>"}</h1>
            </div>
        )
        const normal = (
            <div class="nav">
                <ul>
                    <li class="home"><a href="#">Home</a></li>
                    <li class="tutorials"><a class="active" href="#">Tutorials</a></li>
                    <li class="about"><a href="#">About</a></li>
                    <li class="news"><a href="#">Newsletter</a></li>
                    <li class="contact"><a href="#">Contact</a></li>
                </ul>
            </div>
        )
        const header = this.props.headerType === "normal" ? normal : typewriter
        return (
            <header>
                { header }
            </header>
        )
    }
})
