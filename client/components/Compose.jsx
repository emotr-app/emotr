import React, {Component} from 'react';

class Compose extends Component {
  constructor(props) {
    super(props);

    this.send = props.send;
  }

  render() {
    return (
      <div>
        <span className='pfp'>😃</span>
        <textarea id="composeBox" placeholder='😂' rows="8" cols="50" value={this.props.currentMessage} onChange={this.props.change}></textarea>
        <button onClick={this.props.send}>📩</button>
      </div>
    );
  }
}

export default Compose;