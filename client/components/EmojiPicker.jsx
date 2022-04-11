import React, {Component} from 'react';
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";


class EmojiPicker extends Component {
  
  render() {
  return (
    <Picker onSelect={emoji => this.props.insert(emoji.native)} />
    // This method is carried down from the App class and inserts the chosen emoji into the message body
  )
}
};

export default EmojiPicker;