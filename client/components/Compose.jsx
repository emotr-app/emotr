import React, { Component } from "react";
import EmojiPicker from "./EmojiPicker.jsx";
import Popup from "reactjs-popup";

// This component has the text input area and emoji picker for sending a message

class Compose extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="compose">
        <div style={{ top: 0 }}>
          <div className="pfp">😃</div>
          <textarea
            id="compose-box"
            placeholder="Emojis only! Up to 16"
            rows="8"
            cols="80"
            value={this.props.currentMessage}
            onChange={this.props.change}
          ></textarea>
          <div>
            <button
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
              onClick={this.props.send}
            >
              📩
            </button>
          </div>
        </div>
        <Popup
          trigger={
            <button style={{ position: "absolute", top: 0, right: 0 }}>
              🙂
            </button>
          }
          position="right top"
        >
          <div style={{ "margin-left": "20px" }}>
            <EmojiPicker insert={this.props.insert} />
          </div>
        </Popup>
      </div>
    );
  }
}

export default Compose;
