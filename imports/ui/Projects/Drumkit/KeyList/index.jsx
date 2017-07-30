import React from 'react'
import Key from '../Key/index.jsx'

export default KeyList = React.createClass({

    render() {


        return (
            <div className="keys">
                <div data-key="65" className="key">
                    <keyboard>A</keyboard>
                    <span className="sound">clap</span>
                </div>
                <div data-key="83" className="key">
                    <keyboard>S</keyboard>
                    <span className="sound">hihat</span>
                </div>
                <div data-key="68" className="key">
                    <keyboard>D</keyboard>
                    <span className="sound">kick</span>
                </div>
                <div data-key="70" className="key">
                    <keyboard>F</keyboard>
                    <span className="sound">openhat</span>
                </div>
                <div data-key="71" className="key">
                    <keyboard>G</keyboard>
                    <span className="sound">boom</span>
                </div>
                <div data-key="72" className="key">
                    <keyboard>H</keyboard>
                    <span className="sound">ride</span>
                </div>
                <div data-key="74" className="key">
                    <keyboard>J</keyboard>
                    <span className="sound">snare</span>
                </div>
                <div data-key="75" className="key">
                    <keyboard>K</keyboard>
                    <span className="sound">tom</span>
                </div>
                <div data-key="76" className="key">
                    <keyboard>L</keyboard>
                    <span className="sound">tink</span>
                </div>
            </div>
        )
    }
})
