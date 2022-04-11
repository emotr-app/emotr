import React, { Component } from "react";

const Emote = (props) => {
  return (
    <div className="emote">
      <span className="pfp">😃</span>
      {props.msg}
      <button
        className="deleteButton"
        onClick={() => props.handleDelete(props.id)}
      >
        🗑️
      </button>
    </div>
  );
};

export default Emote;
