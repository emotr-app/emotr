import React, { Component } from 'react';

const Emote = (props) => {
  return (
    <div className="emote">
      <div className="deleteButton">
        <button onClick={() => props.handleDelete(props.id)}>🗑️</button>
      </div>
      <div className="pfp">{props.pfp ?? '😀'}</div>
      <div className="message-body">{props.msg}</div>
    </div>
  );
};

export default Emote;
