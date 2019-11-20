import React, { Component } from "react";
import { getSounds } from "./data";
import "./App.css";

class App extends Component {
  state = {
    sounds: [],
    volume: 10
  };

  keys = React.createRef();

  componentDidMount() {
    this.setState({ sounds: getSounds() });
    window.addEventListener("keydown", e => {
      this.handlePlay(`${e.keyCode}`);
    });
  }

  handleVolumeChange = ({ currentTarget: input }) => {
    this.setState({ volume: input.value });
  };

  handlePlay = key => {
    const sounds = this.state.sounds;
    const code = sounds.find(s => s.key === key);

    if (code) {
      this.keys.current.childNodes[code.id].childNodes[1].volume =
        this.state.volume / 10;
      this.keys.current.childNodes[code.id].childNodes[1].currentTime = 0;
      this.keys.current.childNodes[code.id].childNodes[1].play();
      code.playing = !code.playing;
      this.setState({ sounds });
      this.keys.current.childNodes[code.id].addEventListener(
        "transitionend",
        e => {
          if (e.propertyName !== "transform") return;
          code.playing = false;
          this.setState({ sounds });
        }
      );
    }
  };

  render() {
    return (
      <div className="keys" ref={this.keys}>
        {this.state.sounds.map(sound => (
          <div key={sound.id}>
            <kbd
              onClick={() => this.handlePlay(sound.key, sound.src)}
              className={sound.playing ? "key playing" : "key"}
            >
              {sound.kbd}
            </kbd>
            <audio key={sound.key} src={sound.src}></audio>
          </div>
        ))}
        <input
          type="range"
          name="points"
          min="0"
          max="10"
          onChange={this.handleVolumeChange}
          value={this.state.volume}
        ></input>
      </div>
    );
  }
}

export default App;
