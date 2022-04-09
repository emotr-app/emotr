import React, {Component} from 'react';
import {createRoot} from 'react-dom/client';
import Emote from './components/Emote.jsx';

const test_messages = [
  '🧀 🚸 ♠️ ⛔️ 💴 🔜 🆖 😙 🙀 🍋 👪 🗣 💛 😅 🐔 🏰',
  '🐦 🍬 🙌 🗡 ‼️ 🏘 🏭 🔇 📀 🍝 🚉 🛰 🏠 📸 🕤 🖇',
  '🍻 🚏 🚲 🍟 😮 😻 ♎️ 🍌 ⏯ 🕜 👵 ⏪ 🔘 🐹 😻 🗜',
  '🐢 😸 📥 🐬 🦂 🗯 🗑 📜 🎳 🐴 🌻 😵 📩 ⚖ ✒️ ⚔',
  '♈️ 🕙 🚀 🙃 🏮 🐐 🛤 💰 🙉 ⏪ 🕹 🔓 ☠ ✳️ 😆 ☣'
];

class App extends Component {

  constructor() {
    super();
    this.state = {messages: test_messages};
  }

  componentDidMount() {
    fetch('/feed')
    .then(body => body.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
  
  render() {
    console.log(this.state);
    // Create a reference to the messages on state object
    const messages = this.state.messages;

    const emotes = [];

    for (let i = 0; i < messages.length; i++) {
      //TODO: Convert key to be the unique server sent message_id
      emotes.push(<Emote key={`Emote-${i}`} id={i} msg={messages[i]}/>);
    }

    return (
      <div>
        {emotes}
      </div>
    );
  }
}

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App/>);