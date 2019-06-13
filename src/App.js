import React, { Component } from "react";
import AvengerCard from "./components/AvengerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import avengers from "./characters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    avengers
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Avengers Grid</Title>
        {this.state.avengers.map(avenger => (
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
