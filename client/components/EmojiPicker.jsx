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
    // <Picker onSelect={emoji => alert("Hey:"+emoji.native)} />
    <Picker onSelect={emoji => this.props.insert(emoji.native)} />

    //To hook this up, we can call setState and change the currentMessage property
    //This will need to be written in a method bound to the App class
    //That method will need to be passed as a prop
  )
}
};

export default EmojiPicker;