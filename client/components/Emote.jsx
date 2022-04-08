import React, {Component} from 'react';

const Emote = props => {
  return (
    <div className='emote'>
      <span className='pfp'>😃</span>
      {props.msg}
      <button className='deleteButton'>🗑️</button>
    </div>
  );
};

export default Emote;