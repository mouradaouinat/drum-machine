import React, { Component } from "react";
import { getSounds } from "./data";
import "./App.css";
import Switcher from "./switch";

class App extends Component {
  state = {
    sounds: [],
    volume: 100,
    name: "",
    toggle: false
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
        this.state.volume / 100;
      this.keys.current.childNodes[code.id].childNodes[1].currentTime = 0;
      this.keys.current.childNodes[code.id].childNodes[1].play();
      code.playing = !code.playing;
      this.setState({ sounds, name: code.name });
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

  handleToggle = () => {
    const toggle = !this.state.toggle;
    this.setState({ toggle, name: "" });
  };

  render() {
    return (
      <div className="keys" ref={this.keys}>
        {this.state.sounds.map(sound => (
          <div key={sound.id}>
            <button
              disabled={this.state.toggle}
              onClick={() => this.handlePlay(sound.key)}
              className={sound.playing ? "key playing" : "key"}
            >
              {sound.kbd}
            </button>
            <audio key={sound.key} src={sound.src}></audio>
          </div>
        ))}
        <input
          className="slider"
          type="range"
          name="points"
          min="0"
          max="100"
          onChange={this.handleVolumeChange}
          value={this.state.volume}
        ></input>
        <Switcher
          onToggle={this.handleToggle}
          toggle={this.state.toggle}
        ></Switcher>
        <div className="key title">{this.state.name}</div>
      </div>
    );
  }
}

export default App;
