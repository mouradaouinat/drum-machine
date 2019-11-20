import React from "react";

const Switcher = ({ onToggle, toggle }) => {
  return (
    <div className={toggle ? "switcher-off" : "switcher-on"} onClick={onToggle}>
      <div className={toggle ? "switch-off" : "switch-on"} />
    </div>
  );
};

export default Switcher;
