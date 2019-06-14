import React, { Component } from "react";
import AvengerCard from "./components/AvengerCard";
import Wrapper from "./components/Wrapper";
import avengers from "./characters.json";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    avengers
  };


  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        {this.state.avengers.map(avengers => (
          <AvengerCard
            id={avengers.id}
            key={avengers.id}
            name={avengers.name}
            image={avengers.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
