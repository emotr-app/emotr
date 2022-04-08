import React, {Component} from 'react';
import {createRoot} from 'react-dom/client';
import Emote from './components/Emote.jsx';


class App extends Component {
  
  render() {

    const messages = [
      '🧀 🚸 ♠️ ⛔️ 💴 🔜 🆖 😙 🙀 🍋 👪 🗣 💛 😅 🐔 🏰',
      '🐦 🍬 🙌 🗡 ‼️ 🏘 🏭 🔇 📀 🍝 🚉 🛰 🏠 📸 🕤 🖇',
      '🍻 🚏 🚲 🍟 😮 😻 ♎️ 🍌 ⏯ 🕜 👵 ⏪ 🔘 🐹 😻 🗜',
      '🐢 😸 📥 🐬 🦂 🗯 🗑 📜 🎳 🐴 🌻 😵 📩 ⚖ ✒️ ⚔',
      '♈️ 🕙 🚀 🙃 🏮 🐐 🛤 💰 🙉 ⏪ 🕹 🔓 ☠ ✳️ 😆 ☣'
  ];

    const emotes = [];

    for (let i = 0; i < 5; i++) {
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