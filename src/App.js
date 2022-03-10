import React, { Component } from "react";
import axios from "axios";

import "./css/App.css";
import Card from "./components/Card";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    advice: "",
  };

  async componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const { advice } = response.data.slip;
    this.setState({ advice });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <Notification text="Made With ❤️ By " linkText="Samer A." />
        <Card
          text={advice}
          btnText="Give me advice"
          onFetchAdvice={this.fetchAdvice}
        />
      </div>
    );
  }
}

export default App;
