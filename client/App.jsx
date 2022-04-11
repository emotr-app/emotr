import React, {Component} from 'react';
import {createRoot} from 'react-dom/client';
import Emote from './components/Emote.jsx';
import ResponsiveAppBar from './components/Navbar.jsx';
//import EmojiPicker from './components/EmojiPicker.jsx';
import Compose from './components/Compose.jsx';

const test_messages = [
  { _id: -100, message: "🧀 🚸 ♠️ ⛔️ 💴 🔜 🆖 😙 🙀 🍋 👪 🗣 💛 😅 🐔 🏰" },
  { _id: -101, message: "🐦 🍬 🙌 🗡 ‼️ 🏘 🏭 🔇 📀 🍝 🚉 🛰 🏠 📸 🕤 🖇" },
  { _id: -102, message: "🍻 🚏 🚲 🍟 😮 😻 ♎️ 🍌 ⏯ 🕜 👵 ⏪ 🔘 🐹 😻 🗜" },
  { _id: -103, message: "🐢 😸 📥 🐬 🦂 🗯 🗑 📜 🎳 🐴 🌻 😵 📩 ⚖ ✒️ ⚔" },
  { _id: -104, message: "♈️ 🕙 🚀 🙃 🏮 🐐 🛤 💰 🙉 ⏪ 🕹 🔓 ☠ ✳️ 😆 ☣" },
];

class App extends Component {
  constructor() {
    super();
    this.state = { messages: [] };
    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.insert = this.insert.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  sendMessage() {
    //Construct the request body with the current message, turned into a JSON string
    const body = JSON.stringify({ message: this.state.currentMessage });

    //Construct the POST request with the request body
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };

    //Clear textbox
    this.setState({ ...this.state, currentMessage: "" });

    //Send
    fetch("/feed", request)
      .then(() => this.loadMessages())
      .catch((err) => console.log(err));

    return;
  }

  // handleChange fires each time an emoji is inputted into the input box.
  handleChange(event) {
    // Check if current message is only emojis.
    const msg = event.target.value;
    const regex = /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])+$/gi;
    if (!regex.test(msg)) return; // what is the expected behavior when a non-emoji is attempted? Nothing?

    this.setState({ ...this.state, currentMessage: event.target.value });
  }

  handleDelete(id) {
    // Construct the request body with the current message, turned into a JSON string
    const body = JSON.stringify({ _id: id });

    // Construct the DELETE request with the request body
    const request = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };

    // Delete
    fetch("/feed", request)
      .then(() => this.loadMessages())
      .catch((err) => console.log(err));
  }

  insert(char) {
    this.setState({...this.state, currentMessage: this.state.currentMessage+char});
  }

  loadMessages() {
    //Send a GET request to the endpoint '/feed'
    fetch("/feed")
      .then((body) => body.json()) //Parse incoming json
      .then((messages) => {
        // Set the state to have the new messages received from the server
        this.setState({ messages, currentMessage: "" });
      })
      .catch((err) => console.log(err));

    return;
  }

  componentDidMount() {
    //When the App loads, fetch messages from the server
    this.loadMessages();
  }

  render() {
    // Create a reference to the messages on state object
    const messages = this.state.messages;

    const emotes = [];

    for (let i = messages.length - 1; i >= 0; i--) {
      const { _id, message } = messages[i];
      emotes.push(
        <Emote
          key={_id}
          id={_id}
          msg={message}
          handleDelete={this.handleDelete}
        />
      );
    }

    return (
      <div>
        <ResponsiveAppBar />
        {/*Event handlers that modify state are passed into Compose component
        as well as the current message*/}
        <Compose
          insert={this.insert}
          change={this.handleChange}
          send={this.sendMessage}
          currentMessage={this.state.currentMessage}
        />
        {emotes}
      </div>
    );
  }
}

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
