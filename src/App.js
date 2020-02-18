import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: ""
    }
  }

  handleDecrement = () => {
    if (this.state.counter !== 0) {
      this.setState((prevState) => ({counter: prevState.counter - 1}));
    } else{
      this.setState(() => ({error: "counter can not go below zero."}));
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
      error: ""
    }));
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          {this.state.counter}
        </h1>
        <button
          data-test="increment-button"
          onClick={this.handleIncrement}
        >Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={this.handleDecrement}
        >
          Decrement Counter
        </button>
        <h3 data-test="error-message">{this.state.error}</h3>
      </div>
    );
  }
}

export default App;
