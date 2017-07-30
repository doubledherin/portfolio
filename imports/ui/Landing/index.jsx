import Header from "../Header/index.jsx"
import Thumbnails from "./Thumbnails/index.jsx"

export default Landing = React.createClass({
    render() {
        return (
            <div className="landing">
                <Header headerType="normal"/>
                <Thumbnails />
            </div>
        )
    }
})
