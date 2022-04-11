import React, {Component} from 'react';
import EmojiPicker from './EmojiPicker.jsx';

// This component has the text input area and emoji picker for sending a message

class Compose extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <span style={{top: 0}}>
          <span className='pfp'>{this.props.pfp}</span>
          <textarea id="composeBox" placeholder='😂' rows="8" cols="80" value={this.props.currentMessage} onChange={this.props.change}></textarea>
          <button onClick={this.props.send}>📩</button>
        </span>

        <span style={{float: 'right'}}>
          <EmojiPicker insert={this.props.insert}/>
        </span>
      </div>
    );
  }
}

export default Compose;
