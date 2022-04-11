import React, {Component} from 'react';
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";


class EmojiPicker extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       inputMsg: ''
  //   }
  //   this.onSelect = this.onSelect.bind(this);
  // }  

  // onSelect = emoji => {
  //     this.setState(state => ({inputMsg: `${emoji.colons}`}));
  // }
  
  render() {
  return (
    <Picker onSelect={emoji => alert("Hey:"+emoji.native)} />
  )
}
};

export default EmojiPicker;