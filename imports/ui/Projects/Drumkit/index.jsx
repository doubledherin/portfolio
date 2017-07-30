import React from 'react';
import KeyList from './KeyList/index.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default Drumkit = React.createClass({

    componentDidMount() {
        window.addEventListener('keydown', this.playSound);
    },

    componentWillUnmount() {
        window.removeEventListener('keydown', this.playSound);
    },

    playSound(e) {
        // retrieve from the DOM  an <audio/> element with a data-key that matches e's
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

        // case: no such audio element (audio === null)
        if (!audio) return
        // retrieve from the DOM an element with 1) a class 'key' and 2) a data-key that matches e's
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

        // <audio/> is an HTML5 HMTLMediaElement,
        // which has documentation
        // here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement

        // if this audio element is already in the middle of a .play() execution,
        // interrupt it by starting the time to 0.
        audio.currentTime = 0

        audio.play()

        // only add 'playing' class if the key that was pressed is in the DOM
        if (key) {
            // vanilla JS way of adding a class
            key.classList.add('playing')
        }
    },

    removeTransition(e) {
        console.log("e: ", e)
        if (e.propertyName !== 'transform') return
        this.classList.remove('playing')
    },

    renderKeys() {

    },

    render() {
        return (
            <div className="project drumkit">
                <KeyList />

                <audio data-key="65" src="sounds/clap.wav"></audio>
                <audio data-key="83" src="sounds/hihat.wav"></audio>
                <audio data-key="68" src="sounds/kick.wav"></audio>
                <audio data-key="70" src="sounds/openhat.wav"></audio>
                <audio data-key="71" src="sounds/boom.wav"></audio>
                <audio data-key="72" src="sounds/ride.wav"></audio>
                <audio data-key="74" src="sounds/snare.wav"></audio>
                <audio data-key="75" src="sounds/tom.wav"></audio>
                <audio data-key="76" src="sounds/tink.wav"></audio>
            </div>
        )
    }
})
