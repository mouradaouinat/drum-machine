import React, { Component } from "react";

class Switcher extends Component {
  state = {
    toggle: false
  };

  handleClick = () => {
    const toggle = !this.state.toggle;
    this.setState({ toggle });
  };

  render() {
    const { toggle } = this.state;
    return (
      <div
        className={toggle === false ? "switcher-off" : "switcher-on"}
        onClick={this.handleClick}
      >
        <div className={toggle === false ? "switch-off" : "switch-on"} />
      </div>
    );
  }
}

export default Switcher;
